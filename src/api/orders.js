/* eslint-disable import/no-anonymous-default-export */
import api from "./api";
import API_CONSTANTS, { ALLOW_CORS } from "./constants";

export default {
  getAllProvinces: () => {
    return api.get(`${ALLOW_CORS}https://provinces.open-api.vn/api/p/`);
  },
  getDistrictsByProvinceId: (id) => {
    return api.get(
      `${ALLOW_CORS}https://provinces.open-api.vn/api/p/${id}?depth=2`
    );
  },
  getWardsByDistrictId: (id) => {
    return api.get(
      `${ALLOW_CORS}https://provinces.open-api.vn/api/d/${id}?depth=2`
    );
  },
  create: (params) => {
    return api.post(API_CONSTANTS.ORDERS.CREATE, params);
  },
};
