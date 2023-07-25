/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.PRODUCTS_TYPE.GET);
  },
  create: (param) => {
    return api.post(API_CONSTANTS.PRODUCTS_TYPE.CREATE, param);
  },
  update: (param) => {
    return api.put(API_CONSTANTS.PRODUCTS_TYPE.UPDATE, param);
  },
};
