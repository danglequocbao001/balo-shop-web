import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllOrders, fetchAllProvinces } from "../services/orders";

export const useFetchAllProvinces = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const renameAndMoveObject = (array, text, replacedBy) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].label === text) {
        array[i].label = replacedBy;
        const obj = array.splice(i, 1);
        array.unshift(obj[0]);
        break;
      }
    }
    return array;
  };

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

  const result = renameAndMoveObject(data, "Thành phố Hồ Chí Minh", "Sài Gòn");

  return { provinces: result, isLoading };
};

export const useFetchAllOrder = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetchAllOrders()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);
  return { orders: data, isLoading };
};
