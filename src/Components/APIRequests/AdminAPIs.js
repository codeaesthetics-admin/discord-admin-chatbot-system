import axios from "axios";
import { base_url } from "../../base_url";
export const getAdminData = async () => {
  try {
    const { data } = await axios.get(`${base_url}user/admins`);
    //const { data } = await axios.get(getCollectionsURL);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
