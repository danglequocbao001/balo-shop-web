import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  View,
  Image,
} from "@react-pdf/renderer";
import moneyFormatter from "../../../helpers/money";
import COLOR_CONSTANTS from "../../../constants/colors";
import moment from "moment/moment";
import { useFetchCurrentStaff } from "../../../hooks/useStaffs";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const AdminPDFStatistics = (params) => {
  const statistics = params.statistics;
  const title = params.title;
  const type = params.type;
  const totalPrice = params.totalPrice;

  const { staff } = useFetchCurrentStaff();
  return (
    <div
      style={{
        backgroundColor: COLOR_CONSTANTS.BLACK,
      }}
    >
      {
        <PDFViewer
          style={{
            width: "100vh",
            height: "100vh",
            marginLeft: "40vh",
          }}
        >
          <Document>
            <Page style={styles.body}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 30,
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                  }}
                  src={"../../../../favicon.ico"}
                />
                <Text style={styles.title}>Balo Shop</Text>
              </View>
              <Text style={styles.author}>97 Man Thiện, Hiệp Phú, Thủ Đức</Text>
              <Text style={[styles.title, { fontSize: 22 }]}>
                THỐNG KÊ DOANH THU
              </Text>
              <Text style={[styles.text, { textAlign: "center" }]}>
                {title}
              </Text>

              <>
                <Text style={[styles.text, { textAlign: "center" }]}>
                  {`Ngày lập: Ngày ${moment().format(
                    "DD"
                  )} tháng ${moment().format("MM")} năm ${moment().format(
                    "YYYY"
                  )}`}
                </Text>
                {staff && (
                  <>
                    <Text
                      style={styles.infoText}
                    >{`Mã nhân viên: ${staff.ma_nv}`}</Text>
                    <Text
                      style={styles.infoText}
                    >{`Tên nhân viên: ${staff.ho_nv} ${staff.ten_nv}`}</Text>
                  </>
                )}
              </>

              <View style={styles.table}>
                <View style={styles.pdfTableRow}>
                  <View style={[styles.pdfTableCol, { width: "10%" }]}>
                    <Text style={styles.pdfTableCell}>STT</Text>
                  </View>
                  <View style={[styles.pdfTableCol, { width: "40%" }]}>
                    <Text style={styles.pdfTableCell}>
                      {type.value === "day"
                        ? `${type.label} - Tháng`
                        : type.label}
                    </Text>
                  </View>
                  <View style={[styles.pdfTableCol, { width: "50%" }]}>
                    <Text style={styles.pdfTableCell}>Doanh thu</Text>
                  </View>
                </View>
                {statistics.map((statistic, index) => {
                  return (
                    <View style={styles.pdfTableRow}>
                      <View style={[styles.pdfTableCol, { width: "10%" }]}>
                        <Text style={styles.pdfTableCell}>{index + 1}</Text>
                      </View>
                      <View style={[styles.pdfTableCol, { width: "40%" }]}>
                        <Text style={styles.pdfTableCell}>
                          {statistic.name}
                        </Text>
                      </View>
                      <View style={[styles.pdfTableCol, { width: "50%" }]}>
                        <Text style={styles.pdfTableCell}>
                          {moneyFormatter.format(statistic.tong_thu)}
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
              >{`Tổng doanh thu: ${moneyFormatter.format(totalPrice)}`}</Text>
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
      }
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
    fontSize: 35,
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

export default AdminPDFStatistics;
