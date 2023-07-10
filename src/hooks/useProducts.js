import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchAllProducts,
  fetchAllNewProducts,
  fetchAllPromotionProducts,
  fetchProductById,
} from "../services/products";

export const useFetchAllProducts = () => {
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
        setLoading(false);
      });
  }, []);

  return { products: data, isLoading };
};

export const useFetchAllNewProducts = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllNewProducts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { newProducts: data, isLoading };
};

export const useFetchAllPromotionProducts = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllPromotionProducts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { promoteProducts: data, isLoading };
};

export const useFetchOneProducts = (ma_mh) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetchProductById(ma_mh)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [ma_mh]);

  return { product: data, isLoading };
};
