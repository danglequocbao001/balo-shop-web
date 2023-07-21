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
  getAll: () => {
    return api.get(API_CONSTANTS.ORDERS.GET_ALL);
  },
  getOne: (ma_don_dat_hang) => {
    return api.get(API_CONSTANTS.ORDERS.GET_ONE(ma_don_dat_hang));
  },
  create: (params) => {
    return api.post(API_CONSTANTS.ORDERS.CREATE, params);
  },
  purchase: (param) => {
    return api.post(API_CONSTANTS.ORDERS.PURCHASE, param);
  },
  browse: (param) => {
    return api.post(API_CONSTANTS.ORDERS.BROWSE, param);
  },
};
