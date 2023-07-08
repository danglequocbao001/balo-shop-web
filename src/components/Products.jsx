/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { useFetchAllProducts } from "../hooks/useProducts";
import moneyFormatter from "../helpers/money";
const Products = () => {
  const { products, isLoading } = useFetchAllProducts();

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

  const ShowProduct = () => {
    return (
      <>
        {/* <div className="mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProduct("women's clothing")}
          >
            Woman's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery{" "}
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div> */}
        {products &&
          products.map((product) => {
            return (
              <div className="col-md-3 mb-4" key={product.ma_mh}>
                <div className="card h-100px text-center p-4">
                  <img
                    src={product.hinh_anh}
                    className="card-img-top"
                    height="250px"
                    alt={product.loai_mat_hang.ten_loai_mh}
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
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1>Những sản phẩm mới nhất</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Products;
