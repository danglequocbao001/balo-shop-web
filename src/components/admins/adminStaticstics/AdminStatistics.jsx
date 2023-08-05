import React, { useEffect, useRef, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { statisticsApi } from "../../../api";
import { toast } from "react-toastify";
import moment from "moment/moment";
import COLOR_CONSTANTS from "../../../constants/colors";
import { Button, DatePicker, Select } from "antd";
import moneyFormatter from "../../../helpers/money";
import AdminPDFStatistics from "./AdminPDFStatistics";

const datePickerWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 20,
};

const datePickerText = {
  marginTop: 15,
  marginRight: 5,
};

const AdminStatistics = () => {
  const windowWidth = useRef(window.innerWidth).current;

  const [statisticsArr, setStatisticsArr] = useState([]);

  const [type, setType] = useState({
    value: "day",
    label: "Ngày",
  });

  const [beginDate, setBeginDate] = useState();
  const [endDate, setEndDate] = useState();

  const [chartTitle, setChartTitle] = useState(
    "Thống kê doanh thu trong 30 ngày gần nhất"
  );

  const [chartPDFTitle, setChartPDFTitle] = useState(
    `Thống kê doanh thu từ ngày ${moment()
      .add(-29, "days")
      .format("DD-MM-YYYY")} đến ngày ${moment().format("DD-MM-YYYY")}`
  );

  const [totalPrice, setTotalPrice] = useState(0);

  const [isShowPDF, setShowPDF] = useState(false);

  const lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
  };

  const getTotalPrice = (arr) => {
    return arr.reduce((total, obj) => {
      return total + obj.tong_thu;
    }, 0);
  };

  const getAllStatisticsByPeriod = async (param) => {
    await statisticsApi
      .getByPeriod(param)
      .then((data) => {
        setStatisticsArr(data);
        setTotalPrice(getTotalPrice(data));
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const generateStatistics = (isPDF) => {
    if (beginDate === undefined || endDate === undefined) {
      toast.warn("Không được bỏ trống khoảng thời gian bắt đầu và kết thúc!");
    } else if (beginDate > endDate) {
      toast.warn(
        "Khoảng thời gian bắt đầu phải sớm hơn khoảng thời gian kết thúc!"
      );
    } else {
      getAllStatisticsByPeriod({
        ngay_bat_dau: beginDate,
        ngay_ket_thuc: endDate,
        type: type.value,
      });

      const finalBeginDate = `${beginDate.substring(
        8,
        10
      )}/${beginDate.substring(5, 7)}/${beginDate.substring(0, 4)}`;

      const finalEndDate = `${endDate.substring(8, 10)}/${endDate.substring(
        5,
        7
      )}/${endDate.substring(0, 4)}`;

      const isToday = endDate === moment().format("YYYY-MM-DD");

      if (type.value === "month") {
        setChartTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate.substring(
            3,
            10
          )} đến ${type.label.toLowerCase()} ${finalEndDate.substring(3, 10)}`
        );
        setChartPDFTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate.substring(
            3,
            10
          )} đến ${type.label.toLowerCase()} ${finalEndDate.substring(3, 10)}`
        );
      } else if (type.value === "year") {
        setChartTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate.substring(
            6,
            10
          )} đến ${type.label.toLowerCase()} ${finalEndDate.substring(6, 10)}`
        );
        setChartPDFTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate.substring(
            6,
            10
          )} đến ${type.label.toLowerCase()} ${finalEndDate.substring(6, 10)}`
        );
      } else {
        setChartTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate} đến ${
            isToday ? "hôm nay" : type.label.toLowerCase()
          } ${isToday ? "" : finalEndDate}`
        );
        setChartPDFTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate} đến ${type.label.toLowerCase()} ${finalEndDate}`
        );
      }
      isPDF && setShowPDF(!isShowPDF);
    }
  };

  const dataFormater = (number) => {
    if (number > 1000000000) {
      return (number / 1000000000).toString() + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toString() + "M";
    } else if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

  const CustomToolTip = (props) => {
    const { active, payload, label } = props;
    if (!active || !payload) {
      return null;
    }
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: COLOR_CONSTANTS.WHITE,
          border: `1px solid ${COLOR_CONSTANTS.MIDDLE_GREY}`,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p>
          <strong>{`${type.label} ${label}`}</strong>
        </p>
        {payload.map((item, i) => (
          <p key={i}>
            {"Tổng thu: "}
            <strong>{moneyFormatter.format(item.value)}</strong>
          </p>
        ))}
      </div>
    );
  };

  const statisticsFilter = () => {
    return (
      <div
        style={{
          display: "flex",
          margin: 30,
        }}
      >
        {!isShowPDF && (
          <>
            <div
              style={{
                display: "flex",
                marginTop: 12,
              }}
            >
              <p
                style={{
                  marginTop: 3,
                  marginRight: 5,
                }}
              >
                Xem theo:
              </p>
              <Select
                defaultValue={"day"}
                options={[
                  {
                    value: "day",
                    label: "Ngày",
                  },
                  {
                    value: "month",
                    label: "Tháng",
                  },
                  {
                    value: "year",
                    label: "Năm",
                  },
                ]}
                onChange={(value, label) => {
                  setType(label);
                }}
                style={{
                  width: 90,
                }}
              />
            </div>
            <div style={datePickerWrapper}>
              <p style={datePickerText}>{`${type.label} bắt đầu:`}</p>
              <DatePicker
                onChange={(date, dateString) => {
                  if (type.value === "month") {
                    setBeginDate(`${dateString}-01`);
                  } else if (type.value === "year") {
                    setBeginDate(`${dateString}-01-01`);
                  } else {
                    setBeginDate(dateString);
                  }
                }}
                picker={type.value}
              />
            </div>
            <div style={datePickerWrapper}>
              <p style={datePickerText}>{`${type.label} kết thúc:`}</p>
              <DatePicker
                onChange={(date, dateString) => {
                  if (type.value === "month") {
                    setEndDate(
                      `${dateString}-${lastday(
                        parseInt(dateString.substring(0, 4)),
                        parseInt(dateString.substring(5, 8)) - 1
                      )}`
                    );
                  } else if (type.value === "year") {
                    setEndDate(`${dateString}-12-31`);
                  } else {
                    setEndDate(dateString);
                  }
                }}
                picker={type.value}
              />
            </div>
            <Button
              onClick={() => generateStatistics(false)}
              className="btn btn-dark"
              style={{
                height: 35,
                marginTop: 10,
                color: COLOR_CONSTANTS.WHITE,
                border: "none",
                marginLeft: 20,
                fontWeight: "bold",
              }}
            >
              Xem thống kê
            </Button>
          </>
        )}
        <Button
          onClick={() => {
            isShowPDF ? window.location.reload() : generateStatistics(true);
          }}
          className="btn btn-dark"
          style={{
            height: 35,
            marginTop: 10,
            color: COLOR_CONSTANTS.WHITE,
            border: "none",
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          {isShowPDF ? "Đóng" : "Xuất thống kê"}
        </Button>
      </div>
    );
  };

  const chart = () => {
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            padding: 10,
            fontWeight: "bold",
          }}
        >
          {chartTitle}
        </h3>
        {isShowPDF && (
          <AdminPDFStatistics
            statistics={statisticsArr}
            title={chartPDFTitle}
            type={type}
            totalPrice={totalPrice}
          />
        )}
        <h4
          style={{
            margin: "20px 0",
            fontWeight: "600",
          }}
        >{`Tổng ${chartTitle.substring(
          9,
          chartTitle.length
        )}: ${moneyFormatter.format(totalPrice)}`}</h4>
        <ResponsiveContainer width={windowWidth - 50} height={600}>
          <AreaChart data={statisticsArr} margin={{ left: 0, right: 20 }}>
            <defs>
              <linearGradient id="colorTongThu" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={COLOR_CONSTANTS.GRAY}
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor={COLOR_CONSTANTS.BLACK}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickFormatter={(value) => `(${value})`} />
            <YAxis tickFormatter={dataFormater} />
            <Tooltip content={<CustomToolTip />} />
            <Legend />
            <CartesianGrid strokeDasharray="2 2" />
            <Area
              name="Tổng thu"
              type="monotone"
              dataKey="tong_thu"
              stroke={COLOR_CONSTANTS.BLACK}
              fillOpacity={1}
              fill="url(#colorTongThu)"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  useEffect(() => {
    getAllStatisticsByPeriod({
      ngay_bat_dau: moment().add(-29, "days").format("YYYY-MM-DD"),
      ngay_ket_thuc: moment().format("YYYY-MM-DD"),
      type: type.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        padding: "50px 30px 50px 30px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        Thống kê doanh thu
      </h1>
      {statisticsFilter()}
      {chart()}
    </div>
  );
};

export default AdminStatistics;
