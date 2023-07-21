import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllProducts, fetchProductById } from "../services/products";

export const PRODUCTS_FILTER = {
  ALL: "ALL",
  NEW: "NEW",
  PROMOTE: "PROMOTE",
  BEST_SELLER: "BEST_SELLER",
};

export const useFetchAllProducts = (filter) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllProducts()
      .then((data) => {
        if (filter === PRODUCTS_FILTER.NEW) {
          const result = data.filter((product) => {
            return product.is_new === true;
          });
          setData(result);
        } else if (filter === PRODUCTS_FILTER.PROMOTE) {
          const result = data
            .filter((product) => {
              return product.khuyen_mai !== undefined;
            })
            .sort(function (a, b) {
              return (
                b.khuyen_mai.phan_tram_giam_gia -
                a.khuyen_mai.phan_tram_giam_gia
              );
            });
          setData(result);
        } else if (filter === PRODUCTS_FILTER.BEST_SELLER) {
          const result = data
            .filter((product) => {
              return product.chi_tiet_da_ban !== undefined;
            })
            .sort(function (a, b) {
              return (
                b.chi_tiet_da_ban.tong_so_da_ban -
                a.chi_tiet_da_ban.tong_so_da_ban
              );
            });
          setData(result);
        } else {
          setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [filter]);

  return { products: data, isLoading };
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
