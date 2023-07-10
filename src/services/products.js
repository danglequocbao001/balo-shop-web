import { productsApi } from "../api";

const fetchAllProducts = async () => {
  const data = await productsApi.getAll();
  return data;
};

const fetchAllNewProducts = async () => {
  const data = await productsApi.getAllNew();
  return data;
};

const fetchProductById = async (ma_mh) => {
  const data = await productsApi.getOne(ma_mh);
  return data;
};

export { fetchAllProducts, fetchAllNewProducts, fetchProductById };
