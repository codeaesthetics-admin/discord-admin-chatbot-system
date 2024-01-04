import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
const Appbar = () => {
  const [searchState, setSearchState] = useState("");
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        border: "none",
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "#2c2c2c",
          width: "85vw",
          boxShadow: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              {/* <Grid
                xs={1}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70px",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <Typography variant="h5" sx = {{
                      color: "black",
                      
                      fontWeight: 800,
                    }}>Dashboard</Typography>
                  </Tooltip>
                </Box>
              </Grid> */}
              <Grid
                xs={10}
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  marginLeft: "4vw",
                  alignItems: "center",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <form style={{}}>
                      <TextField
                        className="font"
                        id="filled-basic"
                        label=""
                        variant="filled"
                        //onChange={() ser}
                        fullWidth
                        placeholder="  Search here..."
                        value={searchState}
                        onChange={(e) => {
                          setSearchState(e.target.value);
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        sx={{
                          input: {
                            outline: "none",
                            border: "1px solid lightgrey",
                            background: "#white",
                            padding: 0,
                            pt: 0,
                            borderRadius: "12px",
                            color: "black",
                            fontFamily: "Rubik",
                            height: 35,
                            label: "Search here...",
                            width: 250,
                            color: "white",
                          },
                          color: "white",
                        }}
                      />
                    </form>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid xs={2}></Grid>
            </Grid>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                // onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    //   onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "spaceEvenly",
                      p: 0,
                      mx: 3,
                    }}
                  >
                    <NotificationsIcon sx={{ color: "#EFE1D1", p: 1 }} />
                    <EmailIcon sx={{ color: "#EFE1D1", p: 1 }} />
                  </Box>

                  <IconButton
                    // onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                      sx={{
                        color: "black",
                      }}
                    />
                  </IconButton>
                </Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
