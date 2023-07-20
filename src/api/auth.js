/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getCurrentCredential: () => {
    return api.get(API_CONSTANTS.AUTH.GET_CURRENT_CREDENTIAL);
  },
  signupCustomer: (params) => {
    return api.post(API_CONSTANTS.AUTH.SIGNUP_CUSTOMER, params);
  },
  loginCustomer: (params) => {
    return api.post(API_CONSTANTS.AUTH.LOGIN_CUSTOMER, params);
  },
  loginStaff: (params) => {
    return api.post(API_CONSTANTS.AUTH.LOGIN_STAFF, params);
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
