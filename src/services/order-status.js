import { ordersStatusApi } from "../api";

const fetchAllOrderStatus = async () => {
  const data = await ordersStatusApi.getAll();
  return data;
};
export { fetchAllOrderStatus };
