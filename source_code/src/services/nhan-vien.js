import { nhanVienApi } from "../api";

const fetchAllStaffs = async () => {
  const data = await nhanVienApi.getAll();
  return data;
};

const fetchStaffById = async (ma_nv) => {
  const data = await nhanVienApi.getOne(ma_nv);
  return data;
};

const fetchCurrentStaff = async () => {
  const data = await nhanVienApi.getMe();
  return data;
};

export { fetchAllStaffs, fetchStaffById, fetchCurrentStaff };
