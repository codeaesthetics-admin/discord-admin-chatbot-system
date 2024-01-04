import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../../base_url";
const getPollsURL = `${base_url}/poll`;
//const getVotesPerPolls =   `${base_url}`
export const getPollsData = async () => {
  try {
    const { data } = await axios.get(`${base_url}poll`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getVotesPerPoll = async (id) => {
  try {
    const data = await axios.get(`${base_url}/poll/${id}`);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
