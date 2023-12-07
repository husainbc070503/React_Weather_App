import {
  Box,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Progress from "./Progress";

const WeatherDetails = ({ date, weather, handleDateChange, loading, curr }) => {
  console.log(weather);
  return (
    <Container className="py-4">
      {loading ? (
        <Progress />
      ) : (
        <Box>
          <Grid container spacing={2} className="shift-down">
            <Grid item md={2} xs={6}>
              <FormControl fullWidth>
                <Typography fontWeight="bold">Select Date</Typography>
                <TextField
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </FormControl>
              {[
                "Current Temperature",
                "High Temperature",
                "Low Temperature",
                "Humidity",
                "Sunrise Time",
                "Sunset Time",
              ].map((e) => (
                <Typography fontWeight="bold" fontSize={20} my={3}>
                  {e}
                </Typography>
              ))}
            </Grid>
            {weather?.length !== 0 ? (
              weather?.map((item) => {
                return (
                  <Grid item md={2} xs={6}>
                    <Typography
                      textAlign="center"
                      fontSize={20}
                      fontWeight="bold"
                    >
                      {new Date(item?.date).toDateString()}
                    </Typography>
                    <div className="weather-details-card">
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        margin={0}
                        width="100%"
                      >
                        <Grid item md={4}>
                          <img
                            src={item?.day?.condition.icon}
                            alt={item?.day?.condition.text}
                            width={50}
                          />
                        </Grid>
                        <Grid item md={8} textAlign="start">
                          <Typography fontSize={20} fontWeight="bold">
                            {item?.day?.condition.text}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography textAlign="center" fontSize={20} my={1}>
                        {parseInt(curr.currC)}&deg;C /{parseInt(curr.currF)}
                        &deg;F
                      </Typography>
                      <Typography textAlign="center" fontSize={20} my={3}>
                        {parseInt(item?.day.maxtemp_c)}&deg;C /
                        {parseInt(item?.day?.maxtemp_f)}&deg;F
                      </Typography>
                      <Typography textAlign="center" fontSize={20} my={3}>
                        {parseInt(item?.day?.mintemp_c)}&deg;C /
                        {parseInt(item?.day?.mintemp_f)}&deg;F
                      </Typography>
                      <Typography textAlign="center" fontSize={20} my={3}>
                        {item?.day?.avghumidity}%
                      </Typography>
                      <Typography textAlign="center" fontSize={20} my={3}>
                        {item?.astro?.sunrise}
                      </Typography>
                      <Typography textAlign="center" fontSize={20}>
                        {item?.astro?.sunset}
                      </Typography>
                    </div>
                  </Grid>
                );
              })
            ) : (
              <Grid item md={2}>
                <Typography fontSize={40} textAlign="center">
                  No Results
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default WeatherDetails;
