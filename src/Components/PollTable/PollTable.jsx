import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { pollObjContext } from "../../helper/PollContext";
import { PollContext } from "../../Context/PollContext";

const PollTable = ({ polls, onViewResultClick }) => {
  const navigate = useNavigate();
  const { setPollObj } = useContext(PollContext);
  const cellStyle = {
    textAlign: "center",
    color: "#EFE1D1",
    fontWeight: "bold",
    padding: "2px 2px",
    height: "20px",
  };
  const viewResult = (data) => {
    setPollObj(data);
    console.log(data);
    navigate(`/details/${data}`);
  };
  return (
    <TableContainer
      sx={{
        background: "#3e3e3e",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      {/* <Table
        sx={{
          background: "#3e3e3e",
          border: "1px solid #ccc", // Adding a border
          //marginLeft: "20%",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyle}>Poll Title</TableCell>
            <TableCell sx={cellStyle}>Time</TableCell>
            <TableCell sx={cellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {polls?.map((poll, index) => (
            <TableRow
              key={index}
              sx={{
                background: "transparent", // Adjusting stripe colors
                "&:hover": {
                  background: "#2c2c2c", // Adjust hover color for rows
                },
              }}
            >
              <TableCell sx={cellStyle}>{poll.title}</TableCell>
              <TableCell sx={cellStyle}>{poll.time}</TableCell>
              <TableCell sx={cellStyle}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => viewResult(poll)}
                  sx={{
                    border: "none",
                    color: "#EFE1D1",
                    "&:hover": {
                      border: "none",
                      color: "#3e3e3e",
                      background: "#EFE1D1",
                    },
                  }}
                >
                  <BarChartIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={cellStyle}>Poll ID</TableCell>
            <TableCell sx={cellStyle}>User ID</TableCell>
            <TableCell sx={cellStyle}>Poll Title</TableCell>
            <TableCell sx={cellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {polls
            ? polls.map((poll, index) => (
                <TableRow
                  key={index}
                  sx={{
                    background: "transparent",
                    "&:hover": {
                      background: "#2c2c2c",
                    },
                  }}
                >
                  <TableCell sx={cellStyle}>{poll.poll_id}</TableCell>
                  <TableCell sx={cellStyle}>{poll.user_id}</TableCell>
                  <TableCell sx={cellStyle}>{poll.title}</TableCell>
                  <TableCell sx={cellStyle}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => viewResult(poll?.poll_id)}
                      sx={{
                        border: "none",
                        color: "#EFE1D1",
                        background: "#2c2c2c",
                        "&:hover": {
                          border: "none",
                          color: "#3e3e3e",
                          background: "#EFE1D1",
                        },
                      }}
                    >
                      <BarChartIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : "Loading"}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
PollTable.defaultProps = {
  polls: [],
};
export default PollTable;
