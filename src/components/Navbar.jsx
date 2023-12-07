import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Container } from "@mui/material";

const Navbar = () => {
  const style = { color: "#fff", fontSize: "30px" };

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography fontWeight="bold" className="heading" fontSize={32} sx={{ flexGrow: 1 }}>
              <IconButton>
                <WbSunnyIcon sx={style} />
              </IconButton>
              Weather 99
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => window.location.reload()}
            >
              <RefreshIcon className="icon" />
              <Typography>Refresh</Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
