import React, { useEffect, useState } from "react";
import { api_key } from "./constants/ApiKey";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";
import CityDetails from "./components/CityDetails";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const tempDate = new Date();
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState({
    name: "",
    region: "",
    country: "",
    lat: "",
    lon: "",
  });

  const [date, setDate] = useState(
    `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate()}`
  );

  const [loading, setLoading] = useState(false);
  const [curr, setCurr] = useState({});

  const fetchWeather = async (dateParam) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${
      search ? search : "mumbai"
    }&dt=${dateParam}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { location } = data;

      setCity({
        name: location?.name,
        region: location?.region,
        country: location?.country,
        lat: location?.lat,
        lon: location?.lon,
      });

      setCurr({ currC: data.current.temp_c, currF: data.current.temp_f });
      return data?.forecast?.forecastday;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFutureWeather = async () => {
    try {
      var today = new Date(date);
      var arr = [];

      for (let i = 0; i < 7; i++) {
        const str = `${today.getFullYear()}-${
          today.getMonth() + 1
        }-${today.getDate()}`;

        const res = await fetchWeather(str);
        console.log(res);
        arr.push(res);

        const tmrw = new Date(today);
        tmrw.setDate(today.getDate() + 1);

        if (tmrw.getMonth() !== new Date(date).getMonth())
          today.setMonth(tmrw.getMonth());

        if (tmrw.getFullYear() !== new Date(date).getFullYear())
          today.setFullYear(tmrw.getFullYear());

        today.setDate(tmrw.getDate());
      }

      const data = new Set(arr);
      arr = [];
      data.forEach((item) => arr.push(item[0]));
      setWeather(arr);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => setSearch(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  useEffect(() => {
    setLoading(true);
    setWeather([]);
    fetchFutureWeather();
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [search, date]);

  const theme = createTheme({
    palette: {
      primary: { main: "#2e73ab" },
      secondary: { main: "#00e676" },
    },

    typography: {
      fontFamily: "Crimson Text",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CityDetails city={city} search={search} handleChange={handleChange} />
      <WeatherDetails
        date={date}
        weather={weather}
        handleDateChange={handleDateChange}
        loading={loading}
        curr={curr}
      />
    </ThemeProvider>
  );
}

export default App;
