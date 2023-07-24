import { Button, Image } from "antd";
import React, { useState } from "react";
import COLOR_CONSTANTS from "../../../constants/colors";
import moneyFormatter from "../../../helpers/money";

const AdminProductItem = (params) => {
  const [showDetail, setDetail] = useState(false);
  const product = params.product;

  const itemText = (title, text) => {
    return (
      <div
        style={{
          display: "flex",
          marginRight: 10,
        }}
      >
        <p
          style={{
            marginRight: 5,
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontWeight: "bold",
            color: COLOR_CONSTANTS.BLACK,
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div
      className="col-md-3 mb-4"
      style={{
        border: `1px solid ${COLOR_CONSTANTS.GRAY}`,
        margin: 10,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <div>
        <Image
          alt={product.hinh_anh}
          src={product.hinh_anh}
          width={300}
          height={300}
        />
      </div>
      <div>
        {itemText("Loại mặt hàng: ", product.loai_mat_hang.ten_loai_mh)}
        {itemText("Tên mặt hàng: ", product.ten_mh)}

        <Button
          className="btn btn-dark"
          style={{
            height: 40,
            marginTop: 5,
            color: COLOR_CONSTANTS.WHITE,
            border: "none",
            margin: "10px 0",
          }}
          onClick={() => setDetail(!showDetail)}
        >
          Chi tiết
        </Button>
        {showDetail && (
          <>
            {itemText(
              "Giá đang áp dụng: ",
              `${moneyFormatter.format(product.thay_doi_gia.gia_dang_ap_dung)}`
            )}
            {itemText(
              "Khuyến mãi: ",
              product.khuyen_mai
                ? `Đang áp dụng (-${
                    product.khuyen_mai.phan_tram_giam_gia
                  }% - còn ${moneyFormatter.format(
                    product.khuyen_mai.gia_sau_khi_giam
                  )})`
                : "Không áp dụng"
            )}
            {itemText(
              "Sản phẩm mới: ",
              product.is_new ? "Đang áp dụng" : "Không áp dụng"
            )}
            {itemText(
              "Số lượng đã bán trong 30 ngày gần nhất: ",
              product.chi_tiet_da_ban
                ? product.chi_tiet_da_ban.tong_so_da_ban
                : 0
            )}
            {itemText("Còn lại: ", product.so_luong)}
            {itemText("Nhà sản xuất: ", product.nha_san_xuat)}
            {itemText("Mô tả: ", product.mo_ta)}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProductItem;
