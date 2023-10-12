/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  create: (param) => {
    return api.post(API_CONSTANTS.BILLS.CREATE, param);
  },
};
