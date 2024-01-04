import { Button } from "@mui/material";
import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
const Buttons = (props) => {
  const color =
    props.action === "edit"
      ? "primary"
      : props.action === "delete"
      ? "red"
      : props.action === "view"
      ? "grey"
      : "green";

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          marginRight: 2,
          background: color,
          color: "white",
          border: "none",
          color: "black",
          "&:hover": {
            background: color,
          },
        }}
        endIcon={
          props.action === "edit" ? (
            <EditIcon />
          ) : props.action === "delete" ? (
            <DeleteIcon />
          ) : props.action === "view" ? (
            <InfoIcon />
          ) : (
            <AddIcon />
          )
        }
        onClick={props.fun}
      >
        {" "}
        {/* {props.action} */}
      </Button>
    </>
  );
};

export default Buttons;
