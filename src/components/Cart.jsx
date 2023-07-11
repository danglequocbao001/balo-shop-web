import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteItem, addItem } from "../redux/action";
import { Link } from "react-router-dom";
import moneyFormatter from "../helpers/money";
const Cart = () => {
  const state = useSelector((state) => state.HandleCart);
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
  const cartItems = state.map((product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5" key={product.ma_mh}>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.hinh_anh}
                alt={product.ten_mh}
                width="200px"
                height="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.ten_mh}</h3>
              <h5
                style={{
                  textDecoration: product.khuyen_mai ? "line-through" : "none",
                  fontWeight: product.khuyen_mai ? "300" : "500",
                }}
              >{`Đơn giá: ${moneyFormatter.format(product.gia)}`}</h5>
              {product.khuyen_mai && (
                <h5>{`Giảm còn: ${moneyFormatter.format(
                  product.khuyen_mai.gia_sau_khi_giam
                )}`}</h5>
              )}
              <p className="lead fw-bold">
                {`${product.quantity} x ${moneyFormatter.format(
                  product.khuyen_mai
                    ? product.khuyen_mai.gia_sau_khi_giam
                    : product.gia
                )} = ${moneyFormatter.format(
                  product.quantity *
                    (product.khuyen_mai
                      ? product.khuyen_mai.gia_sau_khi_giam
                      : product.gia)
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
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
