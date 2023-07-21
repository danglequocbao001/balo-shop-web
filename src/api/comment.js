/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getByProduct: (ma_mh) => {
    return api.get(API_CONSTANTS.COMMENT.GET_BY_PRODUCT(ma_mh));
  },
  create: (param) => {
    return api.post(API_CONSTANTS.COMMENT.CREATE, param);
  },
  delete: (ma_binh_luan) => {
    return api.delete(API_CONSTANTS.COMMENT.DELETE(ma_binh_luan));
  },
};
