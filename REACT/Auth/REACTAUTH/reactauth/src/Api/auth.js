import axios from "axios";

const url = "http://localhost:5000";

 export const loginApi = async (data) => {
  try {
    const response = await axios.post(`${url}/auth/login`, data);
    return response;
  } catch (error) {
    return error;
  }
};
