import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";

const CityDetails = ({ city, search, handleChange }) => {
  const { name, region, country, lat, lon } = city;

  return (
    <Container maxWidth="lg" className="mt-5 border-bottom pb-5">
      <Box>
        <Grid container alignItems="center" rowSpacing={2}>
          <Grid item md={6} xs={12}>
            <Grid container alignItems="center">
              <Grid item md={1}>
                <PlaceIcon className="icon" />
              </Grid>
              <Grid item md={11}>
                <Typography fontWeight="bold" fontSize={30}>
                  {name}, {region}, {country}
                </Typography>
                <Typography>
                  {lat} Latitude and {lon} Longitude
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-search">
                Search your city
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search"
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search your city"
                autoFocus
                placeholder="Search"
                value={search}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CityDetails;
