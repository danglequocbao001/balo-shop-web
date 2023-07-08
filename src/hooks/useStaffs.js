import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchAllStaffs,
  fetchCurrentStaff,
  fetchStaffById,
} from "../services/nhan-vien";

export const useFetchAllStaffs = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAllStaffs()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { staffs: data, isLoading };
};

export const useFetchStaffById = (ma_nv) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetchStaffById(ma_nv)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [ma_nv]);

  return { staff: data, isLoading };
};

export const useFetchCurrentStaff = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCurrentStaff()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, []);

  return { staff: data, isLoading };
};
