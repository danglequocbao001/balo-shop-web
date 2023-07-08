import { nhaCungCapApi } from "../api";

const fetchAllNCCs = async () => {
  const data = await nhaCungCapApi.getAll();
  return data;
};
export { fetchAllNCCs };
