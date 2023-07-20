import { useEffect, useState } from "react";
// import { authApi } from "../api";
import { fetchCurrentCredential } from "../services/auth";
import { TOKEN_LOCAL_STORAGE } from "../api/constants";
import { toast } from "react-toastify";

// export const useCreateCustomer = () => {
//   const [isLoading, setLoading] = useState(false);

//   return { isLoading };
// };

// export const useGetCustomer = () => {
//   const [isLoading, setLoading] = useState(false);
// };

export const useFetchCurrentCredential = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_LOCAL_STORAGE) === null) {
    } else {
      setLoading(true);
      fetchCurrentCredential()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false);
        });
    }
  }, []);

  return { currentCredential: data, isLoading };
};
