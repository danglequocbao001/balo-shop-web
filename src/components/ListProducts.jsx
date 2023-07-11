import React from "react";
import moneyFormatter from "../helpers/money";
import { NavLink } from "react-router-dom";
import COLOR_CONSTANTS from "../constants/colors";
import LoadingSpinner from "./LoadingSpinnner/LoadingSpinner";

const ListProducts = (param) => {
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
                  {product.khuyen_mai && (
                    <div
                      style={{
                        width: 55,
                        height: 40,
                        backgroundColor: COLOR_CONSTANTS.ERROR,
                        position: "absolute",
                        zIndex: 1,
                        borderBottomRightRadius: 10,
                        paddingTop: 7,
                      }}
                    >
                      <span
                        style={{
                          color: COLOR_CONSTANTS.WHITE,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        {`-${product.khuyen_mai.phan_tram_giam_gia}%`}
                      </span>
                    </div>
                  )}
                  <div className="card h-100px text-center p-4">
                    <span style={{ fontSize: 20 }}>
                      {`${product.ma_loai_mh}/${product.loai_mat_hang.ten_loai_mh}`}
                    </span>
                    <img
                      src={product.hinh_anh}
                      className="card-img-top"
                      height="250px"
                      alt={product.loai_mat_hang.ten_loai_mh}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.ten_mh}</h5>
                      <p
                        className="card-text"
                        style={{
                          textDecoration: product.khuyen_mai
                            ? "line-through"
                            : "none",
                          fontWeight: product.khuyen_mai ? "300" : "bold",
                        }}
                      >
                        {`Giá: ${moneyFormatter.format(product.gia)}`}
                      </p>
                      {product.khuyen_mai && (
                        <p
                          className="card-text"
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {`Giảm còn: ${moneyFormatter.format(
                            product.khuyen_mai.gia_sau_khi_giam
                          )}`}
                        </p>
                      )}
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
      {param.isListProductsLoading && <LoadingSpinner />}
      {!param.isListProductsLoading && <ShowListProducts />}
    </div>
  );
};

export default ListProducts;
