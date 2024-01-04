import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
const MyModal = ({ getCollections, open, setOpen, children }) => {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    background: "#2c2c2c",
    border: "2px solid #000",
    color: "white",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        a
        aria-describedby="modal-modal-description"
        sx={{
          background: "#2c2c2c",
        }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};

export default MyModal;
