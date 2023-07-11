import React from "react";
import LoadingSpinner from "../LoadingSpinnner/LoadingSpinner";
import ProductItem from "./ProductItem";

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
              return <ProductItem product={product} key={product.ma_mh} />;
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
