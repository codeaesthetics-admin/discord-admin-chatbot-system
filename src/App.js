import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import "@fontsource/roboto/300.css";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { PollContext } from "./Context/PollContext";
import { useState } from "react";

function App() {
  const [pollObj, setPollObj] = useState({});

  return (
    <BrowserRouter>
      <PollContext.Provider value={{ pollObj, setPollObj }}>
        <Box sx={{ background: "#3e3e3e", height: "100vh" }}>
          <Home />;
        </Box>
      </PollContext.Provider>
    </BrowserRouter>
  );
}

export default App;
