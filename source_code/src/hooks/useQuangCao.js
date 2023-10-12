import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllQuangCaos } from "../services/quang-cao";

export const useFetchAllQuangCaos = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllQuangCaos()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { quangCaos: data, isLoading };
};
