import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllNCCs } from "../services/nha-cung-cap";

export const useFetchAllNCCs = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllNCCs()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { nhaCungCaps: data, isLoading };
};
