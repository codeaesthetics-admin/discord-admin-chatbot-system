import React from "react";
import Sidebar from "../Components/Drawer/Drawer";
import { Box } from "@mui/material";
import Admins from "./Admins";
import Polls from "./Polls";

import BarChart from "../Components/Charts/BarChartPolling";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import Collection from "./Collection";
import Login from "../Components/Login/Login";
import Users from "./Users";
import DiscordButtons from "../Components/DiscordButtons/DiscordButtons";
import Discord from "./Discord";
const Home = () => {
  const location = useLocation();

  // Check if the current location is the login route
  const isLoginRoute = location.pathname === "/";
  const address = localStorage.getItem("address");

  return (
    <>
      <Box>
        {/* <Appbar />  */}
        {/* {token && <Sidebar />} */}
        {/* <Router> */}
        {/* <pollObjContext.Provider value={{ globalPollObj, setGlobalPollOjb }}> */}
        {/* <Sidebar /> */}
        {!isLoginRoute && address && <Sidebar />}
        <Routes>
          <Route path="/" element={<Login />} />

          {address ? (
            <>
              <Route path="/admin" element={<Admins />} />
              {/* Uncomment protected routes */}
              {/* <Route path="/voting" element={<Voting />} /> */}
              <Route path="/polls" element={<Polls />} />
              <Route path="/details/:data" element={<BarChart />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/users" element={<Users />} />
              <Route path="/button" element={<Discord />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
        {/* </pollObjContext.Provider> */}
        {/* </Router> */}
        {/* <Admins /> */}
        {/* <Polls /> */}
      </Box>
    </>
  );
};

export default Home;
