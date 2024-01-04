import { Button, TextField, Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import { buttonData } from "../APIRequests/DiscordButtonsAPIs";
import { useState } from "react";
const DiscordButtons = () => {
  const [buttonColor, setButtonColor] = useState();
  const [uiButton, setUIButton] = useState("");
  const getColorFromValue = (buttonColor) => {
    switch (buttonColor) {
      case "primary":
        return "blue";
      case "Secondary":
        return "grey";
      case "Danger":
        return "red";
      case "Success":
        return "green";
      default:
        return ""; // Set a default color or leave it empty
    }
  };
  const callButtonAPI = async (color) => {
    const res = await buttonData({ name: color });
    console.log(res);
  };

  const setColor = () => {
    callButtonAPI(buttonColor);
  };
  const handleChange = (event) => {
    setButtonColor(event.target.value);
    console.log(event.target.value, "button");
    setUIButton(getColorFromValue(event.target.value));
  };

  return (
    <Box
      sx={{
        marginLeft: "300px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "5vh",
        }}
      >
        <Grid item lg={4}>
          <TextField
            select
            value={buttonColor}
            label="Color"
            fullWidth
            onChange={handleChange}
            variant="filled"
            InputLabelProps={{
              style: {
                color: "#EFE1D1",
              },
            }}
            SelectProps={{
              style: {
                color: "#EFE1D1",
              },
            }}
            sx={{
              color: "#EFE1D1",
              background: "#2c2c2c",
              borderRadius: "2px",
              "& .MuiOutlinedInput-root": {
                // borderColor: "#EFE1D1",
                "&.Mui-focused fieldset": {
                  // border: "none",
                  borderColor: "#EFE1D1",
                },
              },
            }}
          >
            <MenuItem value={"primary"}>Bule</MenuItem>
            <MenuItem value={"Secondary"}>Grey</MenuItem>
            <MenuItem value={"Danger"}>Red</MenuItem>
            <MenuItem value={"Success"}>Green</MenuItem>
          </TextField>
        </Grid>
        <Grid item lg={4}>
          <Button
            sx={{
              backgroundColor: uiButton,
              marginTop: "3%",
              color: "white",
            }}
            onClick={(e) => callButtonAPI(buttonColor)}
          >
            Submit
          </Button>
        </Grid>
        <Grid item lg={4} />
      </Grid>
    </Box>
  );
};

export default DiscordButtons;
