import { productsApi } from "../api";

const fetchAllProducts = async () => {
  const data = await productsApi.getAll();
  return data;
};

const fetchProductById = async (ma_mh) => {
  const data = await productsApi.getOne(ma_mh);
  return data;
};

export { fetchAllProducts, fetchProductById };
