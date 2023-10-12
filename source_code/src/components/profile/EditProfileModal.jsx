import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { khachHangApi } from "../../api";
import { formStyles, submitBtn } from "../Login";

export const modalInputWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
};

export const modalInputHeader = {
  fontWeight: "bold",
  marginTop: 5,
  marginBottom: 0,
  marginRight: 5,
  whiteSpace: "pre-wrap",
};

const EditProfileModal = (param) => {
  const DEFAULT_VALUES = {
    email_kh: param.customer.email_kh,
    ho_kh: param.customer.ho_kh,
    ten_kh: param.customer.ten_kh,
    dia_chi: param.customer.dia_chi,
    sdt: param.customer.sdt,
    so_id: param.customer.so_id,
  };

  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const [isOpen, setOpen] = useState(false);

  const onUpdate = async (param) => {
    if (JSON.stringify(param) === JSON.stringify(DEFAULT_VALUES)) {
      toast.warning("Không có thay đổi khác để cập nhật!");
    } else if (param.sdt.length !== 10) {
      toast.warning("Số điện thoại phải có 10 số!");
    } else if (
      param.so_id.length > 0 &&
      (param.so_id.length < 9 || param.so_id.length > 12)
    ) {
      toast.warning("CMND/CCCD có thể bỏ trống hoặc phải có từ 9-12 số!");
    } else {
      await khachHangApi
        .update(param)
        .then(() => {
          toast.success("Cập nhật thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };
  return (
    <>
      <Button type="text" className="mt-1" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faPencil} />
      </Button>

      <Modal
        title="Sửa thông tin người dùng"
        centered
        open={isOpen}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <form
          className="EditProfileModal"
          onSubmit={handleSubmit(onUpdate)}
          style={formStyles}
        >
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>{"Họ:                   "}</p>
            <input type="text" required {...register("ho_kh")} />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Tên:                  "}</p>
            <input type="text" required {...register("ten_kh")} />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Địa chỉ:            "}</p>
            <input type="text" required {...register("dia_chi")} />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>Số điện thoại:</p>
            <input type="number" required {...register("sdt")} />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>CMND/CCCD:</p>
            <input type="number" {...register("so_id")} />
          </div>
          <button style={submitBtn} type={"submit"}>
            Sửa
          </button>
        </form>
      </Modal>
    </>
  );
};

export default EditProfileModal;
