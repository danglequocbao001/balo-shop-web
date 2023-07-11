import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useFetchCurrentCustomer } from "../../hooks/useKhachHang";

export default function ProfilePage() {
  const { customer } = useFetchCurrentCustomer();

  const customerDetailItem = (id, key, value) => {
    return (
      <>
        <MDBRow key={id}>
          <MDBCol sm="3">
            <MDBCardText>{key}</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{value}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
      </>
    );
  };

  const customerDetails = (customerDetailsArray) => {
    return (
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            {customerDetailsArray.map((item) =>
              customerDetailItem(
                customerDetailsArray.indexOf(item),
                item.key,
                item.value
              )
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  };

  return (
    <div style={{ backgroundColor: "#eee", height: "100vh" }}>
      <MDBContainer className="py-5">
        {customer && (
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://toppng.com/uploads/preview/icon-customers-customer-icon-11563506628qpu3czucoo.png"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p
                    className="mb-1"
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      marginTop: 10,
                    }}
                  >{`${customer.ho_kh} ${customer.ten_kh}`}</p>
                  <p className="mb-4">{`${customer.dia_chi}`}</p>
                  <NavLink className="btn btn-dark">Đổi mật khẩu</NavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {customerDetails([
              //   {
              //     key: "Mã khách hàng",
              //     value: customer.ma_kh,
              //   },
              {
                key: "Email",
                value: customer.email_kh,
              },
              {
                key: "Họ và tên",
                value: `${customer.ho_kh} ${customer.ten_kh}`,
              },
              {
                key: "Địa chỉ",
                value: customer.dia_chi,
              },
              {
                key: "Số điện thoại",
                value: customer.sdt,
              },
              {
                key: "CMND/CCCD",
                value: `${
                  customer.so_id === null ? "Chưa cập nhật" : customer.so_id
                }`,
              },
              {
                key: "Đang hoạt động",
                value: `${
                  customer.dang_hoat_dong ? "Đang hoạt động" : "Bị khóa"
                }`,
              },
            ])}
          </MDBRow>
        )}
      </MDBContainer>
    </div>
  );
}
