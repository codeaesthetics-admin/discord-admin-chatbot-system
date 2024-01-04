import React, { useState } from "react";

import {
  Box,
  Container,
  Modal,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Loader from "../Loader/Loader";
const Form = ({
  closer,
  getCollections,
  fields,
  onSubmit,
  title,
  callFunction,
  getUsers,
}) => {
  const [loader, setLoader] = useState(false);
  const [_data, setFormData] = useState({
    collection_name: "",
    taxonId: 0,
    role: "",
    weight: 0,
  });

  console.log(_data, "_data");
  const handleSubmit = async (event) => {
    // setLoader(true);
    event.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log(_data);
    await callFunction(_data);
    await getCollections();
    //await getUsers();
    closer();
    //setLoader(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const inputStyle = {
    marginBottom: "16px",
    width: "100%",
    border: "1px solid white", // Change border color to white
    "& .Mui-focused fieldset": {
      color: "white",
      borderColor: "transparent", // Remove border color on focus
    },
    "& fieldset": { border: "none" },
  };
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {/* {loader ? (
          <Loader />
        ) : ( */}
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <TextField
              key={field.name}
              style={inputStyle}
              label={field.label}
              name={field.name}
              value={_data[field.name] || ""}
              onChange={handleInputChange}
              variant="outlined"
              required
              InputProps={{ disableUnderline: true }}
            />
          ))}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
        {/* )} */}
      </Container>
    </>
  );
};

export default Form;
