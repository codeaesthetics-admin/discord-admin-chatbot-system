import axios from "axios";
import { base_url } from "../../base_url";
const getCollectionsURL = `${base_url}collection/get`;
export const buttonData = async (data) => {
  try {
    console.log("Create collection API call");
    //const { data } = await axios.get(`${base_url}collection/`);
    await axios.post(`${base_url}/button`, data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  } catch (e) {
    console.log(e);
  }
};
