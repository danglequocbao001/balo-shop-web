import { productsApi } from "../api";

async function fetchAllProducts() {
  const  data  = await productsApi.getAll();
  return data;
}

export { fetchAllProducts };
