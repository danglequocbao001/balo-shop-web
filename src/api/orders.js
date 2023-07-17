/* eslint-disable import/no-anonymous-default-export */
import api from "./api";

export default {
  getAllProvinces: () => {
    return api.get("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1");
  },
  getProvinceById: (id) => {
    return api.get(
      `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${id}&limit=-1`
    );
  },
  getWardById: (id) => {
    return api.get(
      `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${id}&limit=-1`
    );
  },
};
