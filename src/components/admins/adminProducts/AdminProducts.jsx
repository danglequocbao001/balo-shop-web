import React from "react";
import { useFetchAllProducts } from "../../../hooks/useProducts";
import AdminProductItem from "./AdminProductItem";
import LoadingSpinner from "../../LoadingSpinnner/LoadingSpinner";
import ModalAddProduct from "./ModalAddProduct";

const AdminProducts = () => {
  const { products, isLoading } = useFetchAllProducts();

  const AdminShowListProducts = () => {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div
            className="col-12"
            style={{
              marginBottom: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1>Quản lý mặt hàng</h1>
            <ModalAddProduct />
          </div>
        </div>
        <div className="row justify-content-center">
          {products &&
            products.map((product) => {
              return <AdminProductItem key={product.ma_mh} product={product} />;
            })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <AdminShowListProducts />}
    </div>
  );
};

export default AdminProducts;
