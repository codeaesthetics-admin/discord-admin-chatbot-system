import React from "react";
import Typography from "@mui/material/Typography";
const Header = (props) => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: 1000,
          paddingY: "3vh",
          //   textAlign: "center",
        }}
      >
        {props.heading}
      </Typography>
    </>
  );
};

export default Header;
