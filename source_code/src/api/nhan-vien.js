/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.STAFFS.GET_ALL);
  },
  getOne: (ma_nv) => {
    return api.get(API_CONSTANTS.STAFFS.GET_ONE(ma_nv));
  },
  getMe: () => {
    return api.get(API_CONSTANTS.STAFFS.GET_ME);
  },
  update: (ma_nv, param) => {
    return api.put(API_CONSTANTS.STAFFS.UPDATE(ma_nv), param);
  },
};
