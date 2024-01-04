import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const CreateButton = ({ modelToggler }) => {
  //   useEffect(() => {
  //     props.modelToggler;
  //   }, []);
  return (
    <>
      <Button
        variant="outlined"
        onClick={modelToggler}
        sx={{
          background: "transparent",
          height: "40px",
          color: "#EFE1D1",
          borderColor: "#EFE1D1",
          fontWeight: 1000,
          display: "flex", // Use flexbox
          alignItems: "center", // Vertically center content
          "&:hover": {
            background: "#EFE1D1",
            border: "1px solid ",
            color: "#2c2c2c",
          },
        }}
      >
        Add <AddIcon sx={{ fontWeight: 1000, marginBottom: "2px" }} />
      </Button>
    </>
  );
};

export default CreateButton;
