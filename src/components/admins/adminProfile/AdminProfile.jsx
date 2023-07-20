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
import { useFetchCurrentStaff } from "../../../hooks/useStaffs";
import COLOR_CONSTANTS from "../../../constants/colors";

const AdminProfile = () => {
  const { staff } = useFetchCurrentStaff();

  const staffDetailItem = (id, key, value) => {
    return (
      <>
        <MDBRow key={id}>
          <MDBCol sm="3">
            <MDBCardText>{key}</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText
              style={{
                fontWeight: "bold",
                color:
                  value === "Đang hoạt động"
                    ? COLOR_CONSTANTS.SUCCESS
                    : key === "Đang hoạt động"
                    ? COLOR_CONSTANTS.ERROR
                    : COLOR_CONSTANTS.BLACK,
              }}
            >
              {value}
            </MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
      </>
    );
  };

  const staffDetails = (customerDetailsArray) => {
    return (
      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>
            {customerDetailsArray.map((item) =>
              staffDetailItem(
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
        {staff && (
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="data:image/png;base64,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"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "10%",
                    }}
                  >
                    <p
                      className="mb-1"
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        marginTop: 10,
                        marginLeft: -20,
                      }}
                    >
                      {`Nhân viên: ${staff.ho_nv} ${staff.ten_nv}`}
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            {staffDetails([
              {
                key: "Mã nhân viên",
                value: staff.ma_nv,
              },
              {
                key: "Email",
                value: staff.email_nv,
              },
              {
                key: "Họ và tên",
                value: `${staff.ho_nv} ${staff.ten_nv}`,
              },
              {
                key: "Ngày sinh",
                value: `${staff.ngay_sinh}`,
              },
              {
                key: "Địa chỉ",
                value: staff.dia_chi,
              },
              {
                key: "Đang hoạt động",
                value: `${staff.dang_hoat_dong ? "Đang hoạt động" : "Bị khóa"}`,
              },
            ])}
          </MDBRow>
        )}
      </MDBContainer>
    </div>
  );
};

export default AdminProfile;
