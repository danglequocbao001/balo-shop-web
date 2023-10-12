import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchAllCustomers,
  fetchCurrentCustomer,
  fetchCustomerById,
} from "../services/khach-hang";

export const useFetchAllCustomers = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllCustomers()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { customers: data, isLoading };
};

export const useFetchOneCustomer = (ma_kh) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetchCustomerById(ma_kh)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [ma_kh]);

  return { customer: data, isLoading };
};

export const useFetchCurrentCustomer = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetchCurrentCustomer()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        // toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { customer: data, isLoading };
};
