import { quangCaoApi } from "../api";

const fetchAllQuangCaos = async () => {
  const data = await quangCaoApi.getAll();
  return data;
};
export { fetchAllQuangCaos };
