/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.SUPPLIER.GET);
  },
  create: (param) => {
    return api.post(API_CONSTANTS.SUPPLIER.CREATE, param);
  },
  update: (ma_ncc, param) => {
    return api.put(API_CONSTANTS.SUPPLIER.UPDATE(ma_ncc), param);
  },
  delete: (ma_ncc) => {
    return api.delete(API_CONSTANTS.SUPPLIER.UPDATE(ma_ncc));
  },
};
