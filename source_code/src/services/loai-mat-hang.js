import { loaiMatHangApi } from "../api";

const fetchAllLoaiMatHangs = async () => {
  const data = await loaiMatHangApi.getAll();
  return data;
};
export { fetchAllLoaiMatHangs };
