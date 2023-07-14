import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem, addItem } from "../redux/action";
import { Link } from "react-router-dom";
import moneyFormatter from "../helpers/money";
import COLOR_CONSTANTS from "../constants/colors";
import ProductItem from "./products/ProductItem";

const Cart = () => {
  const state = useSelector((state) => state.HandleCart);
  const [tmpPrice, setTmpPrice] = useState(0);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  const handleDel = (item) => {
    dispatch(deleteItem(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    let tempPrice = 0;

    if (cart.length > 0) {
      for (let product of cart) {
        tempPrice +=
          (product.khuyen_mai !== undefined
            ? product.khuyen_mai.gia_sau_khi_giam
            : product.thay_doi_gia.gia_dang_ap_dung) * product.quantity;
      }
      setTmpPrice(tempPrice);
    }
  });

  const cartItems = state.map((product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-2" key={product.ma_mh}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              {/* <img
                src={product.hinh_anh}
                alt={product.ten_mh}
                width="200px"
                height="180px"
              /> */}
              <ProductItem product={product} isCart={true} />
            </div>
            <div className="col-md-4">
              <h3>{product.ten_mh}</h3>
              <h5
                style={{
                  textDecoration: product.khuyen_mai ? "line-through" : "none",
                  fontWeight: product.khuyen_mai ? "300" : "500",
                }}
              >{`Đơn giá: ${moneyFormatter.format(
                product.thay_doi_gia.gia_dang_ap_dung
              )}`}</h5>
              {product.khuyen_mai && (
                <h5>{`Giảm còn: ${moneyFormatter.format(
                  product.khuyen_mai.gia_sau_khi_giam
                )}`}</h5>
              )}
              <p className="lead fw-bold">
                {`${product.quantity} x ${moneyFormatter.format(
                  product.khuyen_mai
                    ? product.khuyen_mai.gia_sau_khi_giam
                    : product.thay_doi_gia.gia_dang_ap_dung
                )} = ${moneyFormatter.format(
                  product.quantity *
                    (product.khuyen_mai
                      ? product.khuyen_mai.gia_sau_khi_giam
                      : product.thay_doi_gia.gia_dang_ap_dung)
                )}`}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleDel(product)}
              >
                -
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAdd(product)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <Link
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Đặt hàng
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && cartItems}
      {
        <div
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            display: "flex",
            padding: "0px 40px",
            margin: "20px 0",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontSize: 25,
              backgroundColor: COLOR_CONSTANTS.LIGHT_GREY,
              padding: 10,
              paddingBottom: 0,
              borderRadius: 10,
            }}
          >
            {`Tổng tiền tạm tính: ${moneyFormatter.format(tmpPrice)}`}
          </span>
        </div>
      }
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
