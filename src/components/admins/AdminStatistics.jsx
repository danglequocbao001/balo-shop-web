import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { statisticsApi } from "../../api";
import { toast } from "react-toastify";
import moment from "moment/moment";
import COLOR_CONSTANTS from "../../constants/colors";
import { Button, DatePicker, Select } from "antd";

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

  const lastday = function (y, m) {
    return new Date(y, m + 1, 0).getDate();
  };

  const getAllStatisticsByPeriod = async (param) => {
    await statisticsApi
      .getByPeriod(param)
      .then((data) => {
        setStatisticsArr(data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const generateStatistics = () => {
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

      if (type.value === "month") {
        setChartTitle(
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
      } else {
        setChartTitle(
          `Thống kê doanh thu từ ${type.label.toLowerCase()} ${finalBeginDate} đến ${type.label.toLowerCase()} ${finalEndDate}`
        );
      }
    }
  };

  useEffect(() => {
    getAllStatisticsByPeriod({
      ngay_bat_dau: moment().add(-30, "days").format("YYYY-MM-DD"),
      ngay_ket_thuc: moment().format("YYYY-MM-DD"),
      type: type.value,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        padding: 50,
      }}
    >
      <h1>Trang chủ</h1>
      <div
        style={{
          display: "flex",
          margin: 30,
        }}
      >
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
          onClick={() => generateStatistics()}
          className="btn btn-dark"
          style={{
            height: 35,
            marginTop: 10,
            color: COLOR_CONSTANTS.WHITE,
            border: "none",
            marginLeft: 20,
          }}
        >
          Xem thống kê
        </Button>
      </div>
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
        <LineChart
          width={windowWidth - 50}
          height={600}
          data={statisticsArr}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="tong_tien"
            stroke={COLOR_CONSTANTS.BLACK}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default AdminStatistics;
