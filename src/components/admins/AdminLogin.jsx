import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOCAL_STORAGE } from "../../api/constants";
import TEXT_CONSTANTS from "../../constants/text";
import { authApi } from "../../api";

const AdminLogin = () => {
  // const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onLogin = async (param) => {
    // setLoading(true);
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
    <>
      <p className="title">Admin Login Form</p>

      <form
        className="Login"
        onSubmit={handleSubmit(onLogin)}
        style={{
          display: "inline-grid",
        }}
      >
        <input type="email" required {...register("email_nv")} />
        <input type="password" required {...register("mat_khau")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default AdminLogin;
