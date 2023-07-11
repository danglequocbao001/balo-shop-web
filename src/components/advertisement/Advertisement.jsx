import React from "react";
import { Carousel } from "antd";
import { useFetchAllQuangCaos } from "../../hooks/useQuangCao";
import { styled } from "styled-components";

const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    background: #000000;
  }
  > .slick-dots li.slick-active button {
    background: #000000;
  }
`;

const Advertisement = () => {
  const { quangCaos } = useFetchAllQuangCaos();

  const AdvertisementItem = (item) => {
    return (
      <div>
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