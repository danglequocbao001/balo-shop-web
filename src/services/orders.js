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

const fetchAllOrders = async () => {
  const data = await ordersApi.getAll();
  return data;
};

const fetchOneOrder = async (ma_don_dat_hang) => {
  const data = await ordersApi.getOne(ma_don_dat_hang);
  return data;
};

export {
  fetchAllProvinces,
  fetchDistrictsByProvinceId,
  fetchWardsByDistrictId,
  fetchAllOrders,
  fetchOneOrder,
};
