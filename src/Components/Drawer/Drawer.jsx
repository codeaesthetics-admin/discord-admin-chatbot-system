import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PollIcon from "@mui/icons-material/Poll";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  let drawerContent = [
    {
      btnName: "Admins",
      onClick: () => navigate("admin"),
      icon: <AdminPanelSettingsIcon />,
    },
    {
      btnName: "Collection",
      onClick: () => navigate("collections"),
      icon: <CollectionsBookmarkIcon />,
    },
    {
      btnName: "Polls",
      onClick: () => navigate("polls"),
      icon: <PollIcon />,
    },
    {
      btnName: "Users",
      onClick: () => navigate("users"),
      icon: <GroupIcon />,
    },
    {
      btnName: "Button",
      onClick: () => navigate("button"),
      icon: <GamepadIcon />,
    },
    // {
    //   btnName: "Logout",
    // onClick: () => navigateTo("logout"),
    //   icon: <LogoutIcon />,
    // },
  ];
  let btnStyle = {
    display: "flex",
    justifyContent: "left",
    width: "100%",
    marginRight: "5px",
    marginLeft: "5px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
    fontWeight: 1000,
    color: "#EFE1D1",
    transition: "background-color 0.5s, color 0.5s",
    "&:hover": {
      border: "none",
      color: "#331D2C",
      background: "#EFE1D1",
    },
  };
  const logoutFunc = () => {
    console.log("logout");
    localStorage.setItem("token", "");
    localStorage.setItem("accnum", "");
    localStorage.setItem("XummPkceJwt", "");

    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <Box
        sx={
          {
            // marginTop: "70px",
          }
        }
      >
        <Drawer
          sx={{
            //width: "20%",
            border: "10px solid-red",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "15vw",
              height: "100%",
              //marginTop: "5.1%",
              boxSizing: "border-box",
              //background: "#D3D3D3",
              background: "#2c2c2c",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Divider />
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              height: 50,
              alignItems: "center",
            }}
          >
            <DashboardIcon
              sx={{
                height: "30px",
                width: "30px",
                background: "#EFE1D1",
              }}
            />
          </Toolbar>
          <List>
            {drawerContent.map((index) => (
              <ListItem
                key={index}
                enablePadding
                sx={{
                  paddingY: "0.3rem",
                }}
              >
                <Button
                  variant="outlined"
                  sx={btnStyle}
                  startIcon={index.icon}
                  onClick={(e) => index.onClick()}
                >
                  {index.btnName}
                </Button>
              </ListItem>
            ))}
            <Button
              variant="outlined"
              onClick={logoutFunc}
              sx={{
                display: "flex",
                justifyContent: "left",
                width: "75%",
                color: "#EFE1D1",
                border: "none",
                marginRight: "15px",
                marginLeft: "20px",
                fontSize: "14px",
                fontWeight: "bolder",
                borderRadius: "12px",
                marginTop: "45vh",
                "&:hover": {
                  border: "none",
                  color: "#1e1e1e",
                  background: "#EFE1D1",
                },
              }}
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
