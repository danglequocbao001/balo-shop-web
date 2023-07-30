import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import { authApi } from "../api";
import { toast } from "react-toastify";
import TEXT_CONSTANTS from "../constants/text";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCAL_STORAGE } from "../api/constants";
import COLOR_CONSTANTS from "../constants/colors";

export const container = {
  alignItems: "center",
  justifyContent: "center",
  display: "grid",
  backgroundColor: COLOR_CONSTANTS.LIGHT_GREY,
  height: "100vh",
};

export const wrapper = {
  width: 500,
  height: 500,
  backgroundColor: COLOR_CONSTANTS.WHITE,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  padding: 25,
  marginTop: -200,
};

export const headerTitle = {
  textAlign: "center",
  marginTop: 20,
  marginBottom: 50,
  fontWeight: "bold",
};

export const formStyles = {
  display: "block",
};

export const inputWrapper = {
  marginLeft: "10%",
  marginBottom: 10,
};

export const inputTitle = {
  marginBottom: 10,
  fontWeight: "bold",
  fontSize: 18,
};

export const inputStyles = {
  display: "block",
  width: "85%",
  fontSize: 16,
};

export const submitBtn = {
  backgroundColor: COLOR_CONSTANTS.BLACK,
  color: COLOR_CONSTANTS.WHITE,
  border: "none",
  borderRadius: 5,
  padding: 8,
  fontWeight: "bold",
  fontSize: 15,
  display: "flex",
  marginLeft: "auto",
  marginTop: 20,
  marginRight: 60,
};

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = async (param) => {
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
    <div style={container}>
      <div style={wrapper}>
        <h3 style={headerTitle} className="title">
          Đăng nhập
        </h3>

        <form
          className="Login"
          onSubmit={handleSubmit(onLogin)}
          style={formStyles}
        >
          <div style={inputWrapper}>
            <p style={inputTitle}>Email</p>
            <input
              style={inputStyles}
              type="email"
              required
              {...register("email_kh")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>Mật khẩu</p>
            <input
              style={inputStyles}
              type="password"
              required
              {...register("mat_khau")}
            />
          </div>
          <button type={"submit"} style={submitBtn}>
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
