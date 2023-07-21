import React, { useState } from "react";
import moneyFormatter from "../../helpers/money";
import COLOR_CONSTANTS from "../../constants/colors";
import { Button } from "antd";
import { fetchOneOrder } from "../../services/orders";
import { ordersApi } from "../../api";
import { Spin, Modal, Select } from "antd";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { useFetchOneCustomer } from "../../hooks/useKhachHang";

const btnStyle = {
  backgroundColor: COLOR_CONSTANTS.BLACK,
  color: COLOR_CONSTANTS.WHITE,
  fontWeight: "bold",
  marginRight: 10,
  border: "none",
  width: 140,
  height: 40,
};

const SpinWrapper = styled(Spin)`
  .ant-spin-dot-item {
    background-color: ${COLOR_CONSTANTS.WHITE};
  }
`;

const OrderItem = (params) => {
  const [isShow, setShow] = useState(false);
  const [isShowCustomer, setShowCustomer] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const [isShowBrowseModal, setShowBrowseModal] = useState(false);
  const [isShowDeliverydModal, setShowDeliveryModal] = useState(false);

  const [maNVGH, setMaNVGH] = useState();

  const order = params.order;
  const currentCredential = params.currentCredential;
  const staff = params.staff;
  const staffs = params.staffs;

  const { customer } = useFetchOneCustomer(order.ma_kh);

  const isStaffBrowse =
    currentCredential &&
    currentCredential.role === "staff" &&
    staff &&
    staff.ma_bp === "NV_DUYET";

  const isStaffDelivery =
    currentCredential &&
    currentCredential.role === "staff" &&
    staff &&
    staff.ma_bp === "NV_GH";

  const isStaff = isStaffBrowse || isStaffDelivery;

  const isCustomer = currentCredential && currentCredential.role === "customer";

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
    setLoading(true);
    fetchOneOrder(ma_don_dat_hang).then(async (data) => {
      await ordersApi
        .purchase({
          tong_tien: data[0].tong_tien,
          ma_don_dat_hang: ma_don_dat_hang,
        })
        .then((url) => {
          setLoading(false);
          window.open(url);
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false);
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
            whiteSpace: "nowrap",
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

  const detailCustomer = (customer) => {
    return (
      <div
        style={{
          border: `1px solid ${COLOR_CONSTANTS.MIDDLE_GREY}`,
          padding: 10,
          paddingBottom: 0,
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        {itemText("Mã khách hàng:", customer.ma_kh)}
        {itemText("Họ tên khách hàng:", `${customer.ho_kh} ${customer.ten_kh}`)}
        {itemText("Email khách hàng:", customer.email_kh)}
        {itemText("Sdt khách hàng:", customer.sdt)}
      </div>
    );
  };

  const convertDeliveryStaffs = (staffs) => {
    return staffs
      .filter((staff) => staff.bo_phan.ma_bp === "NV_GH")
      .map((staff) => {
        return {
          value: staff.ma_nv,
          label: `${staff.bo_phan.ma_bp} ${staff.ma_nv} ${staff.ho_nv} ${staff.ten_nv}`,
        };
      });
  };

  const handleBrowse = async () => {
    if (!maNVGH) toast.error("Không được bỏ trống nhân viên giao hàng!");
    else {
      const req = {
        ma_don_dat_hang: order.ma_don_dat_hang,
        ma_nv_duyet: staff.ma_nv,
        ma_nv_giao_hang: maNVGH,
      };
      await ordersApi
        .browse(req)
        .then(() => {
          toast.success("Duyệt đơn đặt hàng thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const browseModal = () => {
    return (
      <Modal
        title="Duyệt đơn đặt hàng"
        open={isShowBrowseModal}
        onOk={() => handleBrowse()}
        onCancel={() => setShowBrowseModal(!isShowBrowseModal)}
        okText="Duyệt đơn đặt hàng"
        cancelText="Đóng"
      >
        <div
          style={{
            marginTop: 20,
          }}
        >
          {itemText("Mã đơn đặt hàng: ", order.ma_don_dat_hang)}
          {itemText("Mã nhân viên duyệt: ", staff.ma_nv)}
          {itemText(
            "Họ tên nhân viên duyệt: ",
            `${staff.ho_nv} ${staff.ten_nv}`
          )}
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginTop: 3,
              }}
            >
              {itemText("Nhân viên giao hàng: ")}
            </div>
            <Select
              style={{ width: 200 }}
              onChange={(value) => {
                setMaNVGH(value);
              }}
              options={convertDeliveryStaffs(staffs)}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 5,
            }}
          >
            {itemText("Trạng thái tiếp theo: ")}{" "}
            <p
              style={{
                color: COLOR_CONSTANTS.DARK_YELLOW,
                fontWeight: "bold",
              }}
            >
              Chờ giao hàng
            </p>
          </div>
        </div>
      </Modal>
    );
  };

  const generateDeliveryText = (arr) => {
    let text = "Đã giao thành công (các) sản phẩm: ";
    arr.forEach((obj, index) => {
      text += `${obj.so_luong_dat} x ${obj.mat_hang.ten_mh}`;
      if (index < arr.length - 1) {
        text += ", ";
      }
    });
    return text;
  };

  const handleDelivery = () => {
    if (staff.ma_nv !== order.ma_nv_giao_hang) {
      toast.error("Không được xác nhận đơn hàng của nhân viên khác!");
    } else {
      toast.success("Xác nhận giao hàng thành công!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const deliveryModal = () => {
    return (
      <Modal
        title="Xác nhận giao hàng"
        open={isShowDeliverydModal}
        onOk={() => handleDelivery()}
        onCancel={() => setShowDeliveryModal(!isShowDeliverydModal)}
        okText="Xác nhận giao hàng"
        cancelText="Đóng"
      >
        <div
          style={{
            marginTop: 20,
          }}
        >
          {itemText("Mã đơn đặt hàng: ", order.ma_don_dat_hang)}
          {itemText("Mã nhân viên giao: ", order.ma_nv_giao_hang)}
          {itemText(
            "Họ tên nhân viên giao: ",
            `${order.nv_gh.ho_nv} ${order.nv_gh.ten_nv}`
          )}
          {itemText(
            "Xác nhận: ",
            `${generateDeliveryText(order.chi_tiet)} đến khách hàng.`
          )}
          <div
            style={{
              display: "flex",
              marginTop: 5,
            }}
          >
            {itemText("Trạng thái tiếp theo: ")}{" "}
            <p
              style={{
                color: COLOR_CONSTANTS.SUCCESS,
                fontWeight: "bold",
              }}
            >
              Đã hoàn thành
            </p>
          </div>
        </div>
      </Modal>
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
      {isStaff && customer && (
        <>
          <div
            style={{
              display: "flex",
            }}
          >
            <p
              style={{
                color: "#8d8d8d",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setShowCustomer(!isShowCustomer)}
            >
              Chi tiết khách hàng
            </p>
          </div>
          {isShowCustomer && detailCustomer(customer)}
        </>
      )}
      <div
        style={{
          display: "flex",
        }}
      >
        {itemText("Mã đơn:", order.ma_don_dat_hang)}
        {itemText("Ngày tạo:", order.ngay_tao)}
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {itemText(
          "Họ tên người nhận:",
          `${order.ho_nguoi_nhan} ${order.ten_nguoi_nhan}`
        )}
        {itemText("SĐT người nhận:", order.sdt)}
      </div>
      {itemText("Địa chỉ giao:", order.dia_chi_giao)}
      {itemText("Trạng thái:", order.ten_trang_thai)}
      {itemText("Tổng tiền:", moneyFormatter.format(order.tong_tien))}

      <div
        style={{
          flexDirection: "row",
        }}
      >
        <Button style={btnStyle} onClick={() => setShow(!isShow)}>
          {isShow ? "Đóng" : "Xem chi tiết"}
        </Button>
        {isCustomer && order.ma_trang_thai === "CHO_THANH_TOAN" && (
          <Button
            style={{ ...btnStyle, backgroundColor: COLOR_CONSTANTS.SUCCESS }}
            onClick={() => {
              purchaseNow(order.ma_don_dat_hang);
            }}
          >
            {isLoading ? <SpinWrapper /> : "Thanh toán"}
          </Button>
        )}
        {isStaffBrowse && order.ma_trang_thai === "CHO_DUYET" && staffs && (
          <>
            {browseModal()}
            <Button
              style={{
                ...btnStyle,
                backgroundColor: COLOR_CONSTANTS.SUCCESS,
                width: 200,
              }}
              onClick={() => setShowBrowseModal(!isShowBrowseModal)}
            >
              {"Duyệt đơn đặt hàng"}
            </Button>
          </>
        )}
        {isStaffDelivery && order.ma_trang_thai === "CHO_GIAO_HANG" && (
          <>
            {deliveryModal()}
            <Button
              style={{
                ...btnStyle,
                backgroundColor: COLOR_CONSTANTS.SUCCESS,
                width: 200,
              }}
              onClick={() => setShowDeliveryModal(!isShowDeliverydModal)}
            >
              {"Xác nhận giao hàng"}
            </Button>
          </>
        )}
      </div>
      {isShow && detailItem(order.chi_tiet)}
    </div>
  );
};

export default OrderItem;
