import { authApi } from "../api";

const fetchCurrentCredential = async () => {
  const data = await authApi.getCurrentCredential();
  return data;
};

export { fetchCurrentCredential };
