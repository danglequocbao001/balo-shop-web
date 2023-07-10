import React from "react";
import moneyFormatter from "../helpers/money";
import { NavLink } from "react-router-dom";
import COLOR_CONSTANTS from "../constants/colors";

const ListProducts = (param) => {
  console.log("fuck", param);
  const Loading = () => {
    return (
      <>
        <div className="mb-5 pb-5">
          <button className="btn btn-outline-dark me-3">All</button>
          <button className="btn btn-outline-dark me-3">Men's Clothing</button>
          <button className="btn btn-outline-dark me-3">
            Woman's Clothing
          </button>
          <button className="btn btn-outline-dark me-3">Jewelery </button>
          <button className="btn btn-outline-dark me-3">Electronic</button>
        </div>
      </>
    );
  };

  const ShowListProducts = () => {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1>{param.title}</h1>
          </div>
        </div>
        <div className="row">
          {param.listProducts.length > 0 &&
            param.listProducts.map((product) => {
              return (
                <div className="col-md-3 mb-4" key={product.ma_mh}>
                  {param.isPromotion && (
                    <div
                      style={{
                        width: 60,
                        height: 40,
                        backgroundColor: COLOR_CONSTANTS.ERROR,
                        position: "absolute",
                        zIndex: 1,
                        borderBottomRightRadius: 10,
                        paddingTop: 5,
                      }}
                    >
                      <span
                        style={{
                          color: COLOR_CONSTANTS.WHITE,
                          fontWeight: "bold",
                          marginLeft: 7,
                        }}
                      >
                        {`-${product.phan_tram_giam_gia}%`}
                      </span>
                    </div>
                  )}
                  <div className="card h-100px text-center p-4">
                    <img
                      src={product.hinh_anh}
                      className="card-img-top"
                      height="250px"
                      alt={
                        param.isPromotion
                          ? product.ten_loai_mh
                          : product.loai_mat_hang.ten_loai_mh
                      }
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.ten_mh}</h5>
                      <p className="card-text">
                        {`Giá: ${moneyFormatter.format(product.gia)}`}
                      </p>
                      <p className="card-text">
                        {product.mo_ta.length > 28
                          ? `${product.mo_ta.substring(0, 28)}...`
                          : product.mo_ta}
                      </p>
                      <p className="card-text">{`Còn lại: ${product.so_luong}`}</p>
                      <p className="card-text">{`Nhà sản xuất: ${product.nha_san_xuat}`}</p>
                      <NavLink
                        to={`/products/${product.ma_mh}`}
                        className="btn btn-dark"
                      >
                        Mua ngay
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <div>
      {param.isListProductsLoading && <Loading />}
      {!param.isListProductsLoading && <ShowListProducts />}
    </div>
  );
};

export default ListProducts;
