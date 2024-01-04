import axios from "axios";

const apiAddress = "http://192.168.1.56:4002/api";

export const axiosRequest = async (method_, url_, body, params_) => {
  const URL = apiAddress + url_;

  try {
    const response = await axios({
      method: method_,
      url: URL,
      data: body,
      params: params_,
    });
    return response;
  } catch (error) {
    console.error("Axios Request Error:", error);
    throw error; // Re-throw the error to handle it where axiosRequest is used
  }
};
