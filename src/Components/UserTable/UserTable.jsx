import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const cellStyle = {
  textAlign: "center",
  color: "#EFE1D1",
  fontWeight: "bold",
  padding: "2px 2px",
  height: "20px",
};

const UsersTable = ({
  users,
  editState,
  setEditState,
  deleteState,
  setDeleteState,
  openState,
  setOpenState,
  onClick,
}) => {
  const handleEditClick = (user) => {
    setEditState(true);
    //setOpenState(true);
    onClick(user.user_id);
    console.log(user.user_id);
    console.log(editState);
  };
  const handleDeleteClick = (user) => {
    console.log(user);
    setDeleteState(true);
    //setOpenState(true);
    onClick(user.user_id);
    console.log(user.user_id);
    console.log(deleteState);
  };
  return (
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
            <TableCell sx={cellStyle}>User ID</TableCell>
            <TableCell sx={cellStyle}>Discord ID</TableCell>
            <TableCell sx={cellStyle}>Wallet Address</TableCell>
            <TableCell sx={cellStyle}>Roles</TableCell>
            {/* <TableCell sx={cellStyle}>User Roles Updated By</TableCell> */}
            <TableCell sx={cellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{
                background: "transparent",
                "&:hover": {
                  background: "#2c2c2c",
                },
              }}
            >
              <TableCell sx={cellStyle}>{user.user_id}</TableCell>
              <TableCell sx={cellStyle}>{user.discord_id}</TableCell>
              <TableCell sx={cellStyle}>{user.wallet}</TableCell>
              <TableCell sx={cellStyle}>{user.roles}</TableCell>
              {/* <TableCell sx={cellStyle}>{user.updated_by}</TableCell> */}
              <TableCell sx={cellStyle}>
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
                  onClick={() => handleEditClick(user)}
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
                  onClick={() => handleDeleteClick(user)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
