import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFetchAllLoaiMatHangs } from "../../../hooks/useLoaiMatHang";
import { productsApi } from "../../../api";

const input = {
  marginTop: 10,
};

const ModalAddProduct = (param) => {
  const [isOpen, setOpen] = useState(false);
  const { loaiMatHangs } = useFetchAllLoaiMatHangs();

  const DEFAULT_VALUES = {
    ma_mh: param.product ? param.product.ma_mh : "",
    ten_mh: param.product ? param.product.ten_mh : "",
    nha_san_xuat: param.product ? param.product.nha_san_xuat : "",
    hinh_anh: param.product ? param.product.hinh_anh : "",
    mo_ta: param.product ? param.product.mo_ta : "",
    ma_loai_mh: param.product ? param.product.ma_loai_mh : "",
    gia: param.product ? param.product.gia : 0,
    so_luong: param.product ? param.product.so_luong : 0,
  };

  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const onProcessProduct = async (param) => {
    await productsApi
      .create(param)
      .then(() => {
        toast.success("Thêm mặt hàng thành công!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{
          border: "none",
          marginRight: 100,
        }}
      >
        <FontAwesomeIcon className="ms-2" size="3x" icon={faAdd} />
      </Button>
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
            {...register("ma_mh")}
            name="ma_mh"
            style={input}
            placeholder="Điền mã mặt hàng"
          />
          <select name="ma_loai_mh" {...register("ma_loai_mh")}>
            {loaiMatHangs &&
              loaiMatHangs.map((loaiMatHang) => {
                return (
                  <option value={`${loaiMatHang.ma_loai_mh}`}>
                    {`${loaiMatHang.ma_loai_mh}-${loaiMatHang.ten_loai_mh}`}
                  </option>
                );
              })}
          </select>
          <input
            style={input}
            type="text"
            required
            {...register("ten_mh")}
            placeholder="Điền tên mặt hàng"
          />
          <input
            style={input}
            type="text"
            required
            {...register("nha_san_xuat")}
            placeholder="Điền nhà sản xuất"
          />
          <input
            style={input}
            type="text"
            required
            {...register("hinh_anh")}
            placeholder="Điền link ảnh"
          />
          <input
            style={input}
            type="text"
            required
            {...register("mo_ta")}
            placeholder="Điền mô tả"
          />
          <input
            style={input}
            type="number"
            required
            {...register("gia")}
            placeholder="Điền giá"
          />
          <input
            style={input}
            type="number"
            required
            {...register("so_luong")}
            placeholder="Điền số lượng"
          />
          <input style={input} type={"submit"} />
        </form>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
