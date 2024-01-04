import { CircularProgress } from "@mui/material";
import React from "react";
const Loader = () => {
  return (
    <>
      <CircularProgress
        sx={{
          color: "#EFE1D1",
        }}
      />
    </>
  );
};

export default Loader;
