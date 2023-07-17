// import { ordersApi } from "../api";
import PROVINCES from "../localDatas/provinces";
import DISTRICTS from "../localDatas/districts";
import WARDS from "../localDatas/wards";

const fetchAllProvinces = async () => {
  const data = PROVINCES;
  return data;
};

const fetchProvinceById = async (id) => {
  // const data = await ordersApi.getProvinceById(id);
  const data = DISTRICTS;
  return data.filter((obj) => obj.parent_code === id);
};

const fetchWardById = async (id) => {
  // const data = await ordersApi.getWardById(id);
  const data = WARDS;
  return data.filter((obj) => obj.parent_code === id);
};

export { fetchAllProvinces, fetchProvinceById, fetchWardById };
