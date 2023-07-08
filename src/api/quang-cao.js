/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.ADVERTISEMENT.GET);
  },
  create: (param) => {
    return api.post(API_CONSTANTS.ADVERTISEMENT.CREATE, param);
  },
  update: (ma_qc, param) => {
    return api.put(API_CONSTANTS.ADVERTISEMENT.UPDATE(ma_qc), param);
  },
  delete: (ma_qc) => {
    return api.delete(API_CONSTANTS.PRODUCTS.DELETE(ma_qc));
  },
};
