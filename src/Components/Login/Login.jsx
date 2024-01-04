import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { Xumm } from "xumm";
import { Header } from "../Header/Header";
import { axiosRequest } from "../Apis/Apis";
import { login } from "../APIRequests/UserApis";
const callXummApiURL = "api/luxlion/nfts?userAccount=";
//const XUMM_API_KEY = process.env.REACT_APP_XUMM_API_KEY;
//const XUMM_API_KEY = "b71d235a-5b0a-4c06-aa55-55a0a0af17ad";
var xumm = new Xumm(
  "b71d235a-5b0a-4c06-aa55-55a0a0af17ad",
  "41eef4c3-3188-4314-95a9-f35db93204f5"
);
// var XUMM_API_KEY = new Xumm(
//   "2cc1e927-2d8e-4c9e-aa40-6ba3b75143e5",
//   "d44c0da1-63de-4acc-b223-ab1b58699588"
// );
//const Xumm = new Xumm(XUMM_API_KEY);

const Login = () => {
  const [loggedin, setLoggedIn] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [isNotAdmin, setIsNotAdmin] = useState(false);
  const navigate = useNavigate();

  async function callXummApi(data) {
    try {
      const response = await axiosRequest(
        "get",
        `${callXummApiURL}${data}`,
        undefined,
        undefined
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function XummLogin() {
    if (Xumm) {
      // console.log(xumm);
      // console.log(Xumm_API_KEY);
      connect();
    }
  }
  const callLoginAPI = async (userAcc) => {
    console.log(userAcc);
    const res = await login({ userAccount: userAcc });
    console.log(res?.data?.message, "data is here");
    console.log("navigate after check");
    if (res?.data.message === true) {
      console.log("navigate from here");
      localStorage.setItem("address", userAcc);
      window.location.href = "/admin";
      // navigate("/admin");
    } else {
      console.log("You are not authorized");
      setIsNotAdmin(true);
    }
  };
  useEffect(() => {
    xumm.on("ready", () =>
      console.log("Ready (e.g. hide loading state of page)")
    );
    // We rely on promises in the `success` event: fired again if a user
    // logs out and logs back in again (resets all promises)
    xumm.on("success", async () => {
      xumm.user.account.then((account) => {
        console.log("connected ", account);
        setConnectedAddress(account);
        callLoginAPI(account);
      });
    });
    xumm.on("logout", async () => {
      console.log("disconnected ");
      setConnectedAddress(null);
    });
  }, []);
  function connect() {
    xumm.authorize();
    // callLoginAPI(connectedAddress);
  }
  function Logout() {
    xumm.logout();
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#EFE1D1",
            marginTop: "10%",
            fontWeight: 800,
          }}
        >
          BAFC - BOT
        </Typography>
      </Box>

      <Box
        sx={{
          // height: "90vh", // 100% of the viewport height
          paddingTop: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={(e) => XummLogin()} // Call XummLogin function on button click
          sx={{
            fontWeight: 1000,
            color: "#EFE1D1",
            background: "#331D2C",
          }}
        >
          Login <LoginIcon />
        </Button>

        {/* {connectedAddress && <p>Connected to {connectedAddress}</p>}
      {connectedAddress && <button onClick={Logout}>Logout</button>} */}
      </Box>
      {isNotAdmin && (
        <Typography
          sx={{
            color: "red",
            //marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            fontWeight: 500,
          }}
        >
          You are not an admin!
        </Typography>
      )}
    </>
  );
};

export default Login;
