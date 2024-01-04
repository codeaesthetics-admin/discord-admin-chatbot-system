import React, { useState, useEffect } from "react";
import PollTable from "../Components/PollTable/PollTable";
import { Box, Container, Modal } from "@mui/material";
//import { polls } from "../constants/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomTable from "../Components/shared/CustomTable";
import { POLL_TABLE_COLUMNS } from "../constants";
import Header from "../Components/Header/Header";
import { getPollsData } from "../Components/APIRequests/PollAPIs";
import Loader from "../Components/Loader/Loader";
import CreateButton from "../Components/buttons/CreateButton";
const Polls = () => {
  const [showChart, setShowChart] = useState(false);
  const [open, setOpen] = useState(false);
  const [pollsData, setPollsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const polls = [
  //     {
  //       id: 0,
  //       title: "Favorite Color Poll",
  //       time: "2023-08-17 10:00 AM",
  //       votes: { optionA: 30, optionB: 40 },
  //     },
  //     {
  //       id: 1,
  //       title: "Favorite Team Poll",
  //       time: "2023-08-17 10:00 AM",
  //       votes: { optionA: 40, optionB: 40 },
  //     },
  //     {
  //       id: 2,
  //       title: "Favorite Movie Poll",
  //       time: "2023-08-17 10:00 AM",
  //       votes: { optionA: 80, optionB: 40 },
  //     },

  //     // Add more polls as needed
  //   ];

  const handleViewResultClick = (poll) => {
    // Implement view result logic here
    handleOpen();
    console.log("View result clicked for poll:", poll);
  };
  const getPollsAPICall = async () => {
    setLoading(true);
    const polls = await getPollsData();
    setPollsData(polls);
    console.log(pollsData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    getPollsAPICall();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(pollsData);
    }, 3000);
  }, []);
  return (
    // <Box
    //   sx={{
    //     width: "80vw",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "right",
    //     marginLeft: "17.5vw",
    //   }}
    // >
    //   <Header heading={"Polls"} />
    //   <PollTable polls={pollsData} onViewResultClick={handleViewResultClick} />
    //   {/* <CustomTable columns={POLL_TABLE_COLUMNS} rows={polls} /> */}
    // </Box>
    <>
      {loading ? (
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
            marginLeft: "17.5vw",
          }}
        >
          <Loader />
        </Box>
      ) : (
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
              <Header heading={"Polls"} />
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "right",
                height: 100,
                alignItems: "center",
              }}
            >
              {/* <CreateButton /> */}
            </Box>
          </Box>

          <PollTable
            polls={pollsData}
            onViewResultClick={handleViewResultClick}
          />
          {/* <CustomTable columns={POLL_TABLE_COLUMNS} rows={polls} /> */}
          <Box sx={{}}> </Box>
        </Box>
      )}
    </>
  );
};

export default Polls;
