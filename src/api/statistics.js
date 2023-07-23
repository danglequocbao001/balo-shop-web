/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS from "./constants";

export default {
  getByPeriod: (param) => {
    return api.post(API_CONSTANTS.STATISTICS.GET_BY_PERIOD, param);
  },
};
