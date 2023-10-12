import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchCommentByProduct } from "../services/comment";

export const useFetchAllCommentByProduct = (ma_mh) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCommentByProduct(ma_mh)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [ma_mh]);

  return { comments: data, isLoading };
};
