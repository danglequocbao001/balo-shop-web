import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { featchAllOrders, fetchAllProvinces } from "../services/orders";

export const useFetchAllProvinces = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const renameAndMoveObject = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].label === "Thành phố Hồ Chí Minh") {
        array[i].label = "Sài Gòn";
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

  const result = renameAndMoveObject(data);

  return { provinces: result, isLoading };
};

export const useFetchAllOrder = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    featchAllOrders()
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
