import { ordersApi } from "../api";

const fetchAllProvinces = async () => {
  const data = await ordersApi.getAllProvinces();

  return data.map(({ code, name }) => {
    return {
      value: code,
      label: name,
    };
  });
};

const fetchDistrictsByProvinceId = async (id) => {
  const data = await ordersApi.getDistrictsByProvinceId(id);
  return data.districts.map(({ code, name }) => {
    return {
      value: code,
      label: name,
    };
  });
};

const fetchWardsByDistrictId = async (id) => {
  const data = await ordersApi.getWardsByDistrictId(id);
  return data.wards.map(({ code, name }) => {
    return {
      value: code,
      label: name,
    };
  });
};

const createOrder = async (params) => {
  await ordersApi
    .create(params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export {
  fetchAllProvinces,
  fetchDistrictsByProvinceId,
  fetchWardsByDistrictId,
  createOrder,
};
