import { Box } from "@mui/material";
import React from "react";
import DiscordButtons from "../Components/DiscordButtons/DiscordButtons";
import Header from "../Components/Header/Header";
const Discord = () => {
  return (
    <Box
      sx={{
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        marginLeft: "17.5vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "left",
          }}
        >
          <Header heading={"Discord Buttons"} />
        </Box>
      </Box>
      <DiscordButtons />
    </Box>
  );
};

export default Discord;
