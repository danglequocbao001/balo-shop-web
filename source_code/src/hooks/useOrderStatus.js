import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllOrderStatus } from "../services/order-status";

export const useFetchAllOrderStatus = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllOrderStatus()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { orderStatus: data, isLoading };
};
