import React, { useState } from "react";
import { useFetchAllOrder } from "../../hooks/useOrders";
import OrderItem from "./OrderItem";
import COLOR_CONSTANTS from "../../constants/colors";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchCurrentCredential } from "../../hooks/useAuth";
import { Select } from "antd";

const Orders = () => {
  const { orders } = useFetchAllOrder();

  const { currentCredential } = useFetchCurrentCredential();

  const [isShowStatus, setIsShowStatus] = useState(true);

  const [statusOption, setStatusOption] = useState("ALL");

  const handleChangeStatus = (value) => {
    setStatusOption(value);
  };

  const filterByMaTrangThai = (arr, ma_trang_thai) => {
    if (ma_trang_thai === "ALL") {
      return arr;
    }
    return arr.filter((obj) => obj.ma_trang_thai === ma_trang_thai);
  };

  const status = (name, color, isHideGreater) => {
    return (
      <>
        {isHideGreater !== true && (
          <FontAwesomeIcon
            style={{
              marginTop: 8,
              marginRight: 10,
              color: color,
            }}
            icon={faGreaterThan}
          />
        )}
        <p
          style={{
            backgroundColor: color,
            padding: 5,
            color: COLOR_CONSTANTS.WHITE,
            fontWeight: "bold",
            width: 180,
            textAlign: "center",
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          {name}
        </p>
      </>
    );
  };

  const statusSteps = () => {
    return (
      <div
        style={{
          display: "flex",
          marginTop: 20,
        }}
      >
        {status("Chờ thanh toán", COLOR_CONSTANTS.DARK_YELLOW, true)}
        {status("Chờ duyệt", COLOR_CONSTANTS.DARK_YELLOW)}
        {status("Chờ giao hàng", COLOR_CONSTANTS.DARK_YELLOW)}
        {status("Đã hoàn thành", COLOR_CONSTANTS.SUCCESS)}
      </div>
    );
  };
  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <h5
        style={{
          color: "#8d8d8d",
        }}
      >
        *Bạn cần thanh toán trước khi nhân viên có thể duyệt đơn đặt hàng của
        bạn
      </h5>
      <h5
        style={{
          color: "#8d8d8d",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => setIsShowStatus(!isShowStatus)}
      >
        Chi tiết
      </h5>
      {isShowStatus && statusSteps()}
      <Select
        defaultValue={"ALL"}
        options={[
          {
            value: "ALL",
            label: "Tất cả trạng thái",
          },
          {
            value: "CHO_THANH_TOAN",
            label: "Chờ thanh toán",
          },
          {
            value: "CHO_DUYET",
            label: "Chờ duyệt",
          },
          {
            value: "CHO_GIAO_HANG",
            label: "Chờ giao hàng",
          },
          {
            value: "DA_HOAN_THANH",
            label: "Đã hoàn thành",
          },
        ]}
        onChange={handleChangeStatus}
        style={{
          marginTop: 20,
          width: 150,
        }}
      />
      {currentCredential && orders && (
        <div
          style={{
            marginTop: 30,
          }}
        >
          {filterByMaTrangThai(orders, statusOption).map((order) => {
            return (
              <OrderItem
                key={order.ma_don_dat_hang}
                order={order}
                currentCredential={currentCredential}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Orders;
