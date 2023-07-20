import React from "react";
import { useFetchAllOrder } from "../../hooks/useOrders";
import OrderItem from "./OrderItem";
const Orders = () => {
  const { orders } = useFetchAllOrder();
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
      {orders && (
        <div>
          {orders.map((order) => {
            return <OrderItem order={order} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Orders;
