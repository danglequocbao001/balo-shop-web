import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllLoaiMatHangs } from "../services/loai-mat-hang";

export const useFetchAllLoaiMatHangs = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllLoaiMatHangs()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { loaiMatHangs: data, isLoading };
};
