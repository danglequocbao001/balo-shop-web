import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllProvinces } from "../services/orders";

export const useFetchAllProvinces = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllProvinces()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { provinces: data, isLoading };
};
