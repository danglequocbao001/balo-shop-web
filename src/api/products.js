/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getAll: () => {
    return api.get(API_CONSTANTS.PRODUCTS.GET_ALL);
  },
  getOne: (ma_mh) => {
    return api.get(API_CONSTANTS.PRODUCTS.GET_ONE, ma_mh);
  },

  //   forgetPassword: (params) => {
  //     return api.post(API_CONSTANTS.AUTH.FORGET_PASSWORD, params);
  //   },
  //   resetPassword: (params) => {
  //     return api.post(API_CONSTANTS.AUTH.RESET_PASSWORD, params);
  //   },
  //   updatePassword: (params) => {
  //     return api.post(API_CONSTANTS.AUTH.UPDATE_PASSWORD, params);
  //   },
};
