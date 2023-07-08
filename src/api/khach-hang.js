/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.CUSTOMERS.GET_ALL);
  },
  getOne: (ma_kh) => {
    return api.get(API_CONSTANTS.CUSTOMERS.GET_ONE(ma_kh));
  },
  getMe: () => {
    return api.get(API_CONSTANTS.CUSTOMERS.GET_ME);
  },
  update: (ma_kh, param) => {
    return api.put(API_CONSTANTS.CUSTOMERS.UPDATE(ma_kh), param);
  },
};
