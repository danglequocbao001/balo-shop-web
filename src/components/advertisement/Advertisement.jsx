import React from "react";
import { Carousel } from "antd";
import { useFetchAllQuangCaos } from "../../hooks/useQuangCao";

const Advertisement = () => {
  const { quangCaos } = useFetchAllQuangCaos();

  const AdvertisementItem = (item) => {
    return (
      <div>
        <div
          style={{
            padding: "50px 10% 20px 10%",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {item.ten_qc}
          </span>
          <span
            style={{
              display: "block",
            }}
          >
            {item.noi_dung}
          </span>
        </div>
        <img
          src={item.hinh_anh}
          alt={item.ten_qc}
          style={{
            width: "80%",
            height: "600px",
            marginLeft: "10%",
          }}
        />
      </div>
    );
  };

  return (
    <Carousel autoplay>
      {quangCaos && quangCaos.map((item) => AdvertisementItem(item))}
    </Carousel>
  );
};

export default Advertisement;
