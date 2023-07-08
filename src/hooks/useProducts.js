import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllProducts } from "../services/products";

export function useFetchAllProducts() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);
  return { products: data, isLoading };
}
