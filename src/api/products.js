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
  create: (param) => {
    return api.post(API_CONSTANTS.PRODUCTS.CREATE, param);
  },
  update: (ma_mh, param) => {
    return api.put(API_CONSTANTS.PRODUCTS.UPDATE(ma_mh), param);
  },
  delete: (ma_mh) => {
    return api.delete(API_CONSTANTS.PRODUCTS.DELETE(ma_mh));
  },
};
