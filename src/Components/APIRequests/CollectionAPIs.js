import axios from "axios";
import { base_url } from "../../base_url";
const getCollectionsURL = `${base_url}collection/get`;
const createCollectionURL = `${base_url}collection/create`;
export const getCollectionsData = async () => {
  try {
    const { data } = await axios.get(`${base_url}collection/`);
    //const { data } = await axios.get(getCollectionsURL);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const createCollectionData = async (data) => {
  try {
    console.log("Create collection API call");
    //const { data } = await axios.get(`${base_url}collection/`);
    await axios.post(`${base_url}collection/create`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  } catch (e) {
    console.log(e);
  }
};
export const updateCollectionData = async (id, data) => {
  try {
    console.log("updating collection: adding raffle with ", { id, data });
    const res = await axios.put(`${base_url}collection/update/${id}`, data);
    console.log(res, "response");
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const deleteCollectionData = async (id) => {
  try {
    console.log("deleting this id: ", id);
    const res = await axios.delete(`${base_url}collection/${id}`);
    console.log(res, "response");
    return res;
  } catch (e) {
    console.log(e);
  }
};
