import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loaiMatHangApi } from "../../../api";
import COLOR_CONSTANTS from "../../../constants/colors";

const input = {
  marginTop: 10,
};

const ModalAddProductType = (param) => {
  const [isOpen, setOpen] = useState(false);

  const isAdd = param.isAdd;

  const DEFAULT_VALUES = {
    ma_loai_mh: param.productType ? param.productType.ma_loai_mh : "",
    ten_loai_mh: param.productType ? param.productType.ten_loai_mh : "",
  };

  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const onProcessProduct = async (param) => {
    if (isAdd) {
      await loaiMatHangApi
        .create(param)
        .then(() => {
          toast.success("Thêm loại mặt hàng thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => toast.error(err.message));
    } else {
      await loaiMatHangApi
        .update(param)
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          toast.success("Sửa loại mặt hàng thành công!");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      {isAdd ? (
        <Button
          onClick={() => setOpen(true)}
          style={{
            border: "none",
            marginRight: 100,
          }}
        >
          <FontAwesomeIcon className="ms-2" size="3x" icon={faAdd} />
        </Button>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          className="btn btn-dark"
          style={{
            height: 40,
            marginTop: 5,
            color: COLOR_CONSTANTS.WHITE,
            border: "none",
            margin: "10px 10px",
          }}
        >
          Sửa
        </Button>
      )}
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <form
          className="ModalAddProduct"
          onSubmit={handleSubmit(onProcessProduct)}
          style={{
            display: "inline-grid",
          }}
        >
          <input
            type="text"
            required
            {...register("ma_loai_mh")}
            name="ma_loai_mh"
            style={input}
            placeholder="Điền mã loại mặt hàng"
            disabled={!isAdd}
          />
          <input
            type="text"
            required
            {...register("ten_loai_mh")}
            name="ten_loai_mh"
            style={input}
            placeholder="Điền tên loại mặt hàng"
          />
          <input style={input} type={"submit"} />
        </form>
      </Modal>
    </>
  );
};

export default ModalAddProductType;
