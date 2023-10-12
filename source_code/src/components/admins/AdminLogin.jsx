import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCAL_STORAGE } from "../../api/constants";
import TEXT_CONSTANTS from "../../constants/text";
import { authApi } from "../../api";
import {
  container,
  formStyles,
  headerTitle,
  inputStyles,
  inputTitle,
  inputWrapper,
  submitBtn,
  wrapper,
} from "../Login";

const AdminLogin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onLogin = async (param) => {
    try {
      const data = await authApi.loginStaff(param);
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data[TOKEN_LOCAL_STORAGE]);
      toast.success(TEXT_CONSTANTS.DANG_NHAP_THANH_CONG);
      navigate("/admin");
      window.location.reload();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div style={container}>
      <div style={wrapper}>
        <h3 style={headerTitle} className="title">
          Đăng nhập quản trị
        </h3>

        <form
          className="Login"
          onSubmit={handleSubmit(onLogin)}
          style={formStyles}
        >
          <div style={inputWrapper}>
            <p style={inputTitle}>Email nhân viên</p>
            <input
              style={inputStyles}
              type="email"
              required
              {...register("email_nv")}
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

export default AdminLogin;
