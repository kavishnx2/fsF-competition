import React, { useState, useEffect } from "react";
import "../style/App.css";
import "../style/general.css";
import "../style/bootstrap.min.css";
import Dashboard from "./Dashboard";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import fsc from "../img/fsc.png";
import user from "../img/user.png";
import coin_count from "../img/coin_count.png";

function App() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [balanceCoin, setBalanceCoin] = useState({ amount: 250 });
  const [isCoinNew, setCoinNew] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("BalanceCoin"));
    if (items) {
      setBalanceCoin(items);
    } else {
      setBalanceCoin({ amount: 250 });
      localStorage.setItem("BalanceCoin", JSON.stringify({ amount: 250 }));
    }
    console.log(items);
  }, [isCoinNew]);
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#C1ADFA", height: "110px", paddingTop: "50px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={fsc}
                alt="FSC Logo"
                style={{ marginRight: "8px", paddingBottom: "2px" }}
              />

              <Typography
                noWrap
                href="/"
                sx={{
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  fontFamily: "poppins",
                  fontWeight: 400,
                  fontSize: 30,

                  paddingLeft: 2,
                  letterSpacing: "8%",
                  color: "inherit",
                  textDecoration: "none",
                  textDecorationLine: "none", // Add this line to remove underline
                }}
              >
                Hi Kavish
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">

                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={coin_count}
                    alt="coin count"
                    style={{ marginRight: "15px", paddingTop: "1px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "60%",
                      left: "55%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {balanceCoin.amount}
                    </p>
                  </div>
                </div>

                <img
                  src={user}
                  alt="user Logo"
                  style={{ marginRight: "5px", paddingTop: "1px" }}
                />
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div
        style={{
          backgroundColor: "#F6F6F6",
          width: "100%",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Dashboard isCoinNew={isCoinNew} setCoinNew={setCoinNew} />
      </div>
    </div>
  );
}

export default App;
