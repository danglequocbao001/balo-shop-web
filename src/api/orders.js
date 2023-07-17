/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

const ALLOW_CORS = "http://localhost:8080/";

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
};
