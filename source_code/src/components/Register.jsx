import React from "react";
import {
  container,
  wrapper,
  headerTitle,
  formStyles,
  inputWrapper,
  inputTitle,
  inputStyles,
  submitBtn,
} from "./Login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api";
import { toast } from "react-toastify";
import TEXT_CONSTANTS from "../constants/text";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onRegister = async (param) => {
    if (param.sdt.length !== 10) {
      toast.warning("Số điện thoại phải có 10 số!");
    } else if (
      param.so_id.length > 0 &&
      (param.so_id.length < 9 || param.so_id.length > 12)
    ) {
      toast.warning("CMND/CCCD có thể bỏ trống hoặc phải có từ 9-12 số!");
    } else {
      try {
        const data = await authApi.signupCustomer(param);
        if (data) {
          toast.success(TEXT_CONSTANTS.DANG_KY_THANH_CONG);
          navigate("/login");
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  return (
    <div style={container}>
      <div style={{ ...wrapper, height: 800, marginTop: -20 }}>
        <h3 style={headerTitle} className="title">
          Đăng ký
        </h3>

        <form
          className="Login"
          onSubmit={handleSubmit(onRegister)}
          style={formStyles}
        >
          <div style={inputWrapper}>
            <p style={inputTitle}>*Email</p>
            <input
              style={inputStyles}
              type="email"
              required
              {...register("email_kh")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>*Họ</p>
            <input
              style={inputStyles}
              type="text"
              required
              {...register("ho_kh")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>*Tên</p>
            <input
              style={inputStyles}
              type="text"
              required
              {...register("ten_kh")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>*Địa chỉ</p>
            <input
              style={inputStyles}
              type="text"
              required
              {...register("dia_chi")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>*Số điện thoại</p>
            <input
              style={inputStyles}
              type="number"
              maxLength="10"
              required
              {...register("sdt")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>CMND/CCCD</p>
            <input
              style={inputStyles}
              type="number"
              maxLength="12"
              {...register("so_id")}
            />
          </div>
          <div style={inputWrapper}>
            <p style={inputTitle}>*Mật khẩu</p>
            <input
              style={inputStyles}
              type="password"
              required
              {...register("mat_khau")}
            />
          </div>
          <button type={"submit"} style={submitBtn}>
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
