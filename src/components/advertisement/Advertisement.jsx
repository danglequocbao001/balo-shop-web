import React from "react";
import { Carousel } from "antd";
import { useFetchAllQuangCaos } from "../../hooks/useQuangCao";
import { styled } from "styled-components";
import COLOR_CONSTANTS from "../../constants/colors";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    background: ${COLOR_CONSTANTS.BLACK};
  }
  > .slick-dots li.slick-active button {
    background: ${COLOR_CONSTANTS.BLACK};
  }
`;

const Advertisement = () => {
  const { quangCaos } = useFetchAllQuangCaos();

  const AdvertisementItem = (item) => {
    return (
      <div key={item.ma_qc}>
        <div
          style={{
            padding: "50px 12% 20px 12%",
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
            width: "74%",
            height: "600px",
            marginLeft: "12%",
          }}
        />
      </div>
    );
  };

  return (
    <CarouselWrapper autoplay>
      {quangCaos && quangCaos.map((item) => AdvertisementItem(item))}
    </CarouselWrapper>
  );
};

export default Advertisement;
