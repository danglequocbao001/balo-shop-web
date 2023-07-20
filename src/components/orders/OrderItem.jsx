import React, { useState } from "react";
import moneyFormatter from "../../helpers/money";
import COLOR_CONSTANTS from "../../constants/colors";
import { Button } from "antd";
import { fetchOneOrder } from "../../services/orders";
import { ordersApi } from "../../api";

const btnStyle = {
  backgroundColor: COLOR_CONSTANTS.BLACK,
  color: COLOR_CONSTANTS.WHITE,
  fontWeight: "bold",
  marginRight: 10,
  border: "none",
  width: 140,
  height: 40,
};
const OrderItem = (params) => {
  const [isShow, setShow] = useState(false);

  const getStatusColor = (status) => {
    if (status === "Đã hoàn thành") {
      return COLOR_CONSTANTS.SUCCESS;
    } else if (status === "Đã hủy") {
      return COLOR_CONSTANTS.ERROR;
    } else {
      return COLOR_CONSTANTS.DARK_YELLOW;
    }
  };

  const purchaseNow = async (ma_don_dat_hang) => {
    fetchOneOrder(ma_don_dat_hang).then(async (data) => {
      await ordersApi
        .purchase({
          tong_tien: data[0].tong_tien,
          ma_don_dat_hang: ma_don_dat_hang,
        })
        .then((url) => {
          window.open(url);
        });
    });
  };

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
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontWeight: "bold",
            color:
              title === "Trạng thái:"
                ? getStatusColor(text)
                : COLOR_CONSTANTS.BLACK,
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  const detailItem = (chiTiet) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        {chiTiet.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: `1px solid ${COLOR_CONSTANTS.MIDDLE_GREY}`,
                padding: 10,
                marginRight: 10,
                borderRadius: 10,
              }}
            >
              <div>
                {itemText("Mã mặt hàng:", item.mat_hang.ma_mh)}
                {itemText("Tên mặt hàng:", item.mat_hang.ten_mh)}
                {itemText("Số lượng đặt:", item.so_luong_dat)}
                {itemText("Đơn giá:", moneyFormatter.format(item.don_gia_dat))}
                {itemText(
                  "Thành tiền:",
                  moneyFormatter.format(item.don_gia_dat * item.so_luong_dat)
                )}
              </div>
              <div>
                <img
                  style={{
                    width: 160,
                    height: 160,
                  }}
                  alt={item.mat_hang.hinh_anh}
                  src={item.mat_hang.hinh_anh}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: COLOR_CONSTANTS.LIGHT_GREY,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {itemText("Mã đơn:", params.order.ma_don_dat_hang)}
        {itemText("Ngày tạo:", params.order.ngay_tao)}
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {itemText(
          "Họ tên người nhận:",
          `${params.order.ho_nguoi_nhan} ${params.order.ten_nguoi_nhan}`
        )}
        {itemText("SĐT người nhận:", params.order.sdt)}
      </div>
      {itemText("Địa chỉ giao:", params.order.dia_chi_giao)}
      {itemText("Trạng thái:", params.order.ten_trang_thai)}
      {itemText("Tổng tiền:", moneyFormatter.format(params.order.tong_tien))}

      <div
        style={{
          flexDirection: "row",
        }}
      >
        <Button style={btnStyle} onClick={() => setShow(!isShow)}>
          Xem chi tiết
        </Button>
        {params.order.ma_trang_thai === "CHO_THANH_TOAN" && (
          <Button
            style={{ ...btnStyle, backgroundColor: COLOR_CONSTANTS.SUCCESS }}
            onClick={() => {
              purchaseNow(params.order.ma_don_dat_hang);
            }}
          >
            Thanh toán
          </Button>
        )}
      </div>
      {isShow && detailItem(params.order.chi_tiet)}
    </div>
  );
};
export default OrderItem;
