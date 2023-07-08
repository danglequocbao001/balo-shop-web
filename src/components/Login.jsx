import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import { authApi } from "../api";
import { toast } from "react-toastify";
import TEXT_CONSTANTS from "../constants/text";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCAL_STORAGE } from "../api/constants";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onLogin = async (param) => {
    setLoading(true);
    try {
      const data = await authApi.loginCustomer(param);
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data[TOKEN_LOCAL_STORAGE]);
      toast.success(TEXT_CONSTANTS.DANG_NHAP_THANH_CONG);
      navigate("/");
      window.location.reload();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <p className="title">Login Form</p>

      <form className="Login" onSubmit={handleSubmit(onLogin)}>
        <input type="email" required {...register("email_kh")} />
        <input type="password" required {...register("mat_khau")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default Login;
