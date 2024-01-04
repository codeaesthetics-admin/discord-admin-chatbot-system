import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { polls } from "../../constants/data";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import { pollObjContext } from "../../helper/PollContext";
import { PollContext } from "../../Context/PollContext";
import { getVotesPerPoll } from "../APIRequests/PollAPIs";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../Loader/Loader";
const BarChartPolling = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  const { pollObj } = useContext(PollContext);
  const [voteData, setVoteData] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  console.log("id is: ", params);
  let data1 = [
    // { name: "Geeksforgeeks", students: 400 },
    // { name: "Technical scripter", students: 700 },
    // { name: "Geek-i-knack", students: 200 },
    // { name: "Geek-o-mania", students: 1000 },
  ];
  let d = [];
  const bar = async () => {
    setLoading(true); // Set loading state to true

    // Fetch data from the server
    const votesInfo = await getVotesPerPoll(params.data && params.data);
    setData(votesInfo); // Update the state with the fetched data

    // Check if data has options, if yes, set chart data

    if (data?.data?.options) {
      setChartData(
        data?.data?.options?.map((option) => ({
          title: option.title,
          voteCount: parseInt(option.option_vote_count), // Convert vote count to a number
        }))
      );
    } else {
      setLoaderState(true); // Set loader state if data doesn't have options
    }

    // Logging statements and other operations
    setTimeout(() => {
      setLoading(false); // Set loading state to false
    }, 1000);
  };

  // useEffect(() => {
  //   bar();
  // }, [data]);

  useEffect(() => {
    // Fetch data from the server only when params.data changes
    const fetchData = async () => {
      setLoading(true); // Set loading state to true
      const votesInfo = await getVotesPerPoll(params.data && params.data);
      setData(votesInfo); // Update the state with the fetched data
      setTimeout(() => {
        try {
          // Check if data has options, if yes, set chart data
          if (votesInfo?.data?.options) {
            setChartData(
              votesInfo?.data?.options?.map((option) => ({
                title: option.title,
                voteCount: parseInt(option.option_vote_count), // Convert vote count to a number
              }))
            );
          } else {
            setLoaderState(true); // Set loader state if data doesn't have options
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle error appropriately, e.g., set an error state
        } finally {
          setLoading(false); // Set loading state to false regardless of success or failure
        }
      }, 1000);
    };

    fetchData(); // Call the fetchData function when params.data changes

    // You don't need to include data as a dependency here
    // because you don't want the effect to run when data changes,
    // as it can lead to unnecessary re-fetching.
  }, [params.data]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "25%",
        paddingTop: "10vh",
      }}
    >
      {loading ? (
        <Loader /> // Render the loader when loading is true
      ) : (
        <div>
          {data?.data?.options ? (
            <ResponsiveContainer width={650} height={300} aspect={1.2}>
              <BarChart data={chartData}>
                <Bar
                  dataKey="voteCount"
                  fill="#EFE1D1"
                  barSize={30}
                  isAnimationActive={false}
                />
                {/* <CartesianGrid stroke="#ccc" /> */}
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available</p> // Handle the case when data is not available
          )}
        </div>
      )}
    </Container>
  );
};

export default BarChartPolling;
