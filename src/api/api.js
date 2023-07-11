import axios from "axios";
import API_CONSTANTS, { BASE_URL, TOKEN_LOCAL_STORAGE } from "./constants";
// import { useNavigate } from "react-router-dom";

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
  if (
    config.url === API_CONSTANTS.AUTH.SIGNUP_CUSTOMER ||
    config.url === API_CONSTANTS.AUTH.LOGIN_CUSTOMER ||
    config.url === API_CONSTANTS.AUTH.LOGIN_STAFF
  ) {
  } else {
    // const navigate = useNavigate();
    try {
      const token = localStorage.getItem(TOKEN_LOCAL_STORAGE);
      token && (config.headers[TOKEN_LOCAL_STORAGE] = `${token}`);
    } catch (error) {
      console.log("requestError", error);
      localStorage.clear();
      // navigate("/login");
      throw error.response.data || error;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log("errorerror", error);
    throw error.response.data || error;
  }
);

export default api;
