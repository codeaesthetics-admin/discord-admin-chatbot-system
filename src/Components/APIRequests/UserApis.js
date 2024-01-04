import axios from "axios";
import { base_url } from "../../base_url";
const createUserApiURL = `${base_url}/user/create`;
const getUserApiURL = `${base_url}/api/user`;
const getUserByIdApiURL = `${base_url}/api/user/34`;
export const createUserData = async (data) => {
  try {
    console.log("Create users API call");
    //const { data } = await axios.get(`${base_url}collection/`);
    await axios.post(`${base_url}user/create`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  } catch (e) {
    console.log(e);
  }
};
export const getUserData = async () => {
  try {
    const { data } = await axios.get(`${base_url}user`);
    //const { data } = await axios.get(getCollectionsURL);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const updateUserData = async (id, data) => {
  try {
    console.log("updating user: ", { id, data });
    const res = await axios.put(`${base_url}user/update/${id}`, data);
    console.log(res, "response");
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const deleteUserData = async (id) => {
  try {
    console.log("deleting this id: ", id);
    const res = await axios.delete(`${base_url}user/${id}`);
    console.log(res, "response");
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const searchUserData = async (wallet) => {
  try {
    console.log("searching this user: ", wallet);
    const { data } = await axios.get(`${base_url}user/wallet/${wallet}`);
    console.log("response: ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
//----------------------login api call-------------------

export const login = async (data) => {
  try {
    console.log("login API call");

    const response = await axios.post(`${base_url}login`, data);
    console.log(response.data);

    return response; // Return the entire response object
  } catch (e) {
    console.log(e);
    // Handle the error here if needed
  }
};
