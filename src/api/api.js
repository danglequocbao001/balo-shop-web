import axios from "axios";
import API_CONSTANTS, { BASE_URL, TOKEN } from "./constants";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(async (config) => {
  //   if (
  //     config.url === API_CONSTANTS.AUTH.SIGNUP_CUSTOMER ||
  //     config.url === API_CONSTANTS.AUTH.LOGIN_CUSTOMER ||
  //     config.url === API_CONSTANTS.AUTH.LOGIN_STAFF
  //   ) {
  //     console.log("okvcl");
  //   } else

  const navigate = useNavigate();
  try {
    const token = JSON.parse(localStorage.getItem(TOKEN));
    console.log("dcmtoken", token);
    token && (config.headers[TOKEN] = `${token}`);
  } catch (error) {
    localStorage.clear();
    navigate("/login");
    throw error.response.data;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error.response.data;
  }
);

export default api;
