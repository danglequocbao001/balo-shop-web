/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.PRODUCTS.GET_ALL);
  },
  getOne: (ma_mh) => {
    return api.get(API_CONSTANTS.PRODUCTS.GET_ONE(ma_mh));
  },
};
