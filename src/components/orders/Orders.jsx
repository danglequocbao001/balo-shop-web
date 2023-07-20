import React, { useState } from "react";
import { useFetchAllOrder } from "../../hooks/useOrders";
import OrderItem from "./OrderItem";
import COLOR_CONSTANTS from "../../constants/colors";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchCurrentCredential } from "../../hooks/useAuth";

const Orders = () => {
  const { orders } = useFetchAllOrder();

  const { currentCredential } = useFetchCurrentCredential();

  const [isShowStatus, setIsShowStatus] = useState(true);

  const status = (name, color, isHideGreater) => {
    return (
      <>
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
        {isHideGreater !== true && (
          <FontAwesomeIcon
            style={{
              marginTop: 8,
              marginRight: 10,
            }}
            icon={faGreaterThan}
          />
        )}
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
        {status("Chờ thanh toán", COLOR_CONSTANTS.DARK_YELLOW)}
        {status("Chờ duyệt", COLOR_CONSTANTS.DARK_YELLOW)}
        {status("Chờ giao hàng", COLOR_CONSTANTS.DARK_YELLOW)}
        {status("Đã hoàn thành", COLOR_CONSTANTS.SUCCESS, true)}
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
      {currentCredential && orders && (
        <div
          style={{
            marginTop: 30,
          }}
        >
          {orders.map((order) => {
            return (
              <OrderItem order={order} currentCredential={currentCredential} />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Orders;
