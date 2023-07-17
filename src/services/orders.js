import { ordersApi } from "../api";
import PROVINCES from "../localDatas/provinces";

const fetchAllProvinces = async () => {
  const data = PROVINCES;
  return data;
};

const fetchProvinceById = async (id) => {
  const data = await ordersApi.getProvinceById(id);
  return data.data.data;
};

const fetchWardById = async (id) => {
  const data = await ordersApi.getWardById(id);
  return data.data.data;
};

export { fetchAllProvinces, fetchProvinceById, fetchWardById };
