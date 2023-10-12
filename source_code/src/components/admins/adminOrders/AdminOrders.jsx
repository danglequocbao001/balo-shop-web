import React, { useState } from "react";
import { useFetchAllOrder } from "../../../hooks/useOrders";
import OrderItem from "../../orders/OrderItem";
import { useFetchCurrentCredential } from "../../../hooks/useAuth";
import { Select } from "antd";
import {
  useFetchAllStaffs,
  useFetchCurrentStaff,
} from "../../../hooks/useStaffs";

const AdminOrders = () => {
  const { orders } = useFetchAllOrder();

  const { currentCredential } = useFetchCurrentCredential();

  const { staff } = useFetchCurrentStaff();

  const { staffs } = useFetchAllStaffs();

  const [status, setStatus] = useState("ALL");

  const handleChangeStatus = (value) => {
    setStatus(value);
  };

  const filterByMaTrangThai = (arr, ma_trang_thai) => {
    if (ma_trang_thai === "ALL") {
      return arr;
    }
    return arr.filter((obj) => obj.ma_trang_thai === ma_trang_thai);
  };

  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <div
        className="col-12"
        style={{
          marginBottom: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Quản lý đơn đặt hàng</h1>
      </div>
      {staff && (
        <>
          <h5
            style={{
              color: "#8d8d8d",
            }}
          >
            {staff.ma_bp === "NV_DUYET"
              ? "*Nhân viên duyệt đơn đặt hàng!"
              : "*Nhân viên giao đơn đặt hàng"}
          </h5>

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
              {filterByMaTrangThai(orders, status).map((order) => {
                return (
                  <OrderItem
                    key={order.ma_don_dat_hang}
                    order={order}
                    currentCredential={currentCredential}
                    staff={staff}
                    staffs={staffs}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default AdminOrders;
