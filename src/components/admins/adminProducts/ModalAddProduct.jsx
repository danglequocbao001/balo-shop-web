import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFetchAllLoaiMatHangs } from "../../../hooks/useLoaiMatHang";
import { productsApi } from "../../../api";
import COLOR_CONSTANTS from "../../../constants/colors";
import {
  modalInputHeader,
  modalInputWrapper,
} from "../../profile/EditProfileModal";
import { formStyles, submitBtn } from "../../Login";

const ModalAddProduct = (param) => {
  const [isOpen, setOpen] = useState(false);
  const { loaiMatHangs } = useFetchAllLoaiMatHangs();

  const isAdd = param.isAdd;

  const DEFAULT_VALUES = {
    ma_mh: param.product ? param.product.ma_mh : "",
    ten_mh: param.product ? param.product.ten_mh : "",
    nha_san_xuat: param.product ? param.product.nha_san_xuat : "",
    hinh_anh: param.product ? param.product.hinh_anh : "",
    mo_ta: param.product ? param.product.mo_ta : "",
    ma_loai_mh: param.product ? param.product.ma_loai_mh : "",
    gia: param.product ? param.product.gia : 0,
    so_luong: param.product ? param.product.so_luong : 0,
    is_new: param.product ? param.product.is_new : false,
    is_active: true,
  };

  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const onProcessProduct = async (param) => {
    if (isAdd) {
      await productsApi
        .create(param)
        .then(() => {
          toast.success("Thêm mặt hàng thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => toast.error(err.message));
    } else {
      await productsApi
        .update(param)
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          toast.success("Sửa mặt hàng thành công!");
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
        title={`${isAdd ? "Thêm" : "Sửa"} mặt hàng`}
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <form
          className="ModalAddProduct"
          onSubmit={handleSubmit(onProcessProduct)}
          style={formStyles}
        >
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Mã mặt hàng:  "}</p>
            <input
              type="text"
              required
              {...register("ma_mh")}
              name="ma_mh"
              placeholder="Điền mã mặt hàng"
              disabled={!isAdd}
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Loại mặt hàng: "}</p>
            <select name="ma_loai_mh" {...register("ma_loai_mh")} required>
              {loaiMatHangs &&
                loaiMatHangs.map((loaiMatHang) => {
                  return (
                    <option value={`${loaiMatHang.ma_loai_mh}`}>
                      {`${loaiMatHang.ma_loai_mh}-${loaiMatHang.ten_loai_mh}`}
                    </option>
                  );
                })}
            </select>
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Tên mặt hàng:  "}</p>
            <input
              type="text"
              required
              {...register("ten_mh")}
              placeholder="Điền tên mặt hàng"
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={modalInputHeader}>{"Nhà sản xuất:  "}</p>
            <input
              type="text"
              required
              {...register("nha_san_xuat")}
              placeholder="Điền nhà sản xuất"
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>{"Ảnh:                    "}</p>
            <input
              type="text"
              required
              {...register("hinh_anh")}
              placeholder="Điền link ảnh"
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>{"Mô tả:                  "}</p>
            <input
              type="text"
              required
              {...register("mo_ta")}
              placeholder="Điền mô tả"
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>
              {"Giá:                      "}
            </p>
            <input
              type="number"
              required
              {...register("gia")}
              placeholder="Điền giá"
              disabled={!isAdd}
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>{"Số lượng:            "}</p>
            <input
              type="number"
              required
              {...register("so_luong")}
              placeholder="Điền số lượng"
              disabled={!isAdd}
            />
          </div>
          <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>
              {"Sản phẩm mới:              "}
            </p>
            <select name="is_new" {...register("is_new")}>
              <option value={true}>Áp dụng</option>
              <option value={false}>Không áp dụng</option>
            </select>
          </div>
          {/* <div style={modalInputWrapper}>
            <p style={{ ...modalInputHeader }}>{"Đang được hoạt động:"}</p>
            <select name="is_active" {...register("is_active")}>
              <option value={true}>Áp dụng</option>
              <option value={false}>Không áp dụng</option>
            </select>
          </div> */}
          <button style={submitBtn} type={"submit"}>{`${
            isAdd ? "Thêm" : "Sửa"
          } mặt hàng`}</button>
        </form>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
