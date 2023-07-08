import { useState } from "react";
import { authApi } from "../api";

export const useCreateCustomer = () => {
  const [isLoading, setLoading] = useState(false);

  return { isLoading };
};

export const useGetCustomer = () => {
  const [isLoading, setLoading] = useState(false);
}