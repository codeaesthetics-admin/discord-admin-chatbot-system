import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Modal, Typography } from "@mui/material";
import { Container, TextField } from "@mui/material";
function AdminTable({ admins, onEditClick, onDeleteClick }) {
  const cellStyle = {
    textAlign: "center",
    color: "#EFE1D1",
    fontWeight: "bold",
    padding: "2px 2px",
    height: "20px",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [discordId, setDiscordId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClick = (admin) => {
    handleOpen();
  };
  const handleDeleteClick = (admin) => {
    handleOpen();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ backgroundColor: "#333", minHeight: "100vh" }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              marginTop: "100px",
              backgroundColor: "#444",
            }}
          >
            <h1 style={{ color: "#fff" }}>Admin Registration</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                label="Admin Wallet Address"
                variant="filled"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                sx={{ backgroundColor: "#555" }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Discord ID"
                variant="filled"
                value={discordId}
                onChange={(e) => setDiscordId(e.target.value)}
                sx={{ backgroundColor: "#555" }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px", backgroundColor: "#007BFF" }}
              >
                Update
              </Button>
            </form>
          </Paper>
        </Container>
      </Modal>
      <TableContainer
        sx={{
          background: "#3e3e3e",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle}>Discord Id</TableCell>
              <TableCell sx={cellStyle}>Wallet</TableCell>
              <TableCell sx={cellStyle}>Role</TableCell>
              <TableCell sx={cellStyle}>User role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins?.map((admin, index) => (
              <TableRow
                key={index}
                sx={{
                  background: "transparent",
                  "&:hover": {
                    background: "#2c2c2c",
                  },
                }}
              >
                <TableCell sx={cellStyle}>{admin.discord_id}</TableCell>
                <TableCell sx={cellStyle}>{admin.wallet}</TableCell>
                <TableCell sx={cellStyle}>{admin.roles}</TableCell>
                <TableCell sx={cellStyle}>{admin.user_role}</TableCell>
                {/* <TableCell sx={cellStyle}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      border: "none",
                      color: "#EFE1D1",
                      "&:hover": {
                        border: "none",
                        color: "#3e3e3e",
                        background: "#EFE1D1",
                      },
                    }}
                    onClick={() => handleEditClick(admin)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                      border: "none",
                      color: "#EFE1D1",
                      "&:hover": {
                        border: "none",
                        color: "#3e3e3e",
                        background: "#EFE1D1",
                      },
                    }}
                    onClick={() => handleDeleteClick(admin)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminTable;
