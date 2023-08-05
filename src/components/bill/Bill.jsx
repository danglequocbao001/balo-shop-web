import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  View,
} from "@react-pdf/renderer";
import COLOR_CONSTANTS from "../../constants/colors";
import { useParams } from "react-router-dom";
import { useFetchAllOrder } from "../../hooks/useOrders";
import moneyFormatter from "../../helpers/money";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const Bill = () => {
  const { ma_don_dat_hang } = useParams();

  const { orders } = useFetchAllOrder();

  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    if (orders) {
      setOrder(
        orders.find(
          (order) => order.ma_don_dat_hang === parseInt(ma_don_dat_hang)
        )
      );
    }
  }, [ma_don_dat_hang, orders]);

  return (
    <div
      style={{
        backgroundColor: COLOR_CONSTANTS.BLACK,
      }}
    >
      {orders && order && (
        <PDFViewer
          style={{
            width: "100vh",
            height: "100vh",
            marginLeft: "40vh",
          }}
        >
          <Document>
            <Page style={styles.body}>
              <Text style={styles.title}>B Balo Shop</Text>
              <Text style={styles.author}>97 Man Thiện, Hiệp Phú, Thủ Đức</Text>
              <Text style={styles.title}>HÓA ĐƠN</Text>
              {order.hoa_don && (
                <>
                  <Text style={[styles.text, { textAlign: "center" }]}>
                    {`Ngày ${order.hoa_don.ngay_lap.substring(
                      8,
                      10
                    )} tháng ${order.hoa_don.ngay_lap.substring(
                      5,
                      7
                    )} năm ${order.hoa_don.ngay_lap.substring(0, 4)}`}
                  </Text>
                  <Text
                    style={styles.infoText}
                  >{`Mã hóa đơn: ${order.hoa_don.ma_hoa_don}`}</Text>
                  <Text
                    style={styles.infoText}
                  >{`Mã đơn đặt hàng: ${order.ma_don_dat_hang}`}</Text>
                  <Text
                    style={styles.infoText}
                  >{`Họ tên người nhận: ${order.ho_nguoi_nhan} ${order.ten_nguoi_nhan}`}</Text>
                  <Text
                    style={styles.infoText}
                  >{`Địa chỉ giao: ${order.dia_chi_giao}`}</Text>
                  <Text
                    style={styles.infoText}
                  >{`Số điện thoại: ${order.sdt}`}</Text>
                </>
              )}
              <View style={styles.table}>
                <View style={styles.pdfTableRow}>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>STT</Text>
                  </View>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>Mã mặt hàng</Text>
                  </View>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>Tên mặt hàng</Text>
                  </View>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>Đơn vị tính</Text>
                  </View>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>Số lượng</Text>
                  </View>
                  <View style={styles.pdfTableCol}>
                    <Text style={styles.pdfTableCell}>Đơn giá</Text>
                  </View>
                </View>
                {orders &&
                  order &&
                  order.chi_tiet.map((mat_hang_da_mua, index) => {
                    return (
                      <View style={styles.pdfTableRow}>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>{index + 1}</Text>
                        </View>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>
                            {mat_hang_da_mua.ma_mh}
                          </Text>
                        </View>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>
                            {mat_hang_da_mua.mat_hang.ten_mh}
                          </Text>
                        </View>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>Cái</Text>
                        </View>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>
                            {mat_hang_da_mua.so_luong_dat}
                          </Text>
                        </View>
                        <View style={styles.pdfTableCol}>
                          <Text style={styles.pdfTableCell}>
                            {moneyFormatter.format(mat_hang_da_mua.don_gia_dat)}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
              </View>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "right",
                  marginTop: 10,
                }}
              >{`Tổng tiền: ${moneyFormatter.format(order.tong_tien)}`}</Text>
              <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  infoText: {
    fontSize: 12,
    textAlign: "justify",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 20,
  },
  pdfTableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  pdfTableCol: {
    width: "16.67%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  pdfTableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

export default Bill;
