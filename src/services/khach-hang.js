import { khachHangApi } from "../api";

const fetchAllCustomers = async () => {
  const data = await khachHangApi.getAll();
  return data;
};

const fetchCustomerById = async (ma_kh) => {
  const data = await khachHangApi.getOne(ma_kh);
  return data;
};

const fetchCurrentCustomer = async () => {
  const data = await khachHangApi.getMe();
  return data;
};

export { fetchAllCustomers, fetchCustomerById, fetchCurrentCustomer };
