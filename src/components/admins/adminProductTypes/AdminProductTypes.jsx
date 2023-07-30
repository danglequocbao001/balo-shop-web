import { Table } from "antd";
import React from "react";
import { useFetchAllLoaiMatHangs } from "../../../hooks/useLoaiMatHang";
import ModalAddProductType from "./ModalAddProductType";

const AdminProductTypes = () => {
  const { loaiMatHangs } = useFetchAllLoaiMatHangs();

  const columns = [
    {
      title: "Mã loại mặt hàng",
      dataIndex: "ma_loai_mh",
      key: "ma_loai_mh",
    },
    {
      title: "Tên loại mặt hàng",
      dataIndex: "ten_loai_mh",
      key: "ten_loai_mh",
    },
    {
      title: "Sửa",
      dataIndex: "",
      key: "ma_loai_mh",
      render: (text, record) => <ModalAddProductType productType={record} />,
    },
  ];
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div
          className="col-12"
          style={{
            marginBottom: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Quản lý loại mặt hàng</h1>
          <ModalAddProductType isAdd={true} />
        </div>
      </div>
      <div className="row justify-content-center">
        {loaiMatHangs && <Table dataSource={loaiMatHangs} columns={columns} />}
      </div>
    </div>
  );
};

export default AdminProductTypes;
