import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {
  useFetchAllProducts,
  useFetchAllNewProducts,
  useFetchAllPromotionProducts,
  useFetchAllBestSellerProducts,
} from "../../hooks/useProducts";

import ListProducts from "./ListProducts";

const Products = () => {
  const { products, isLoading: isProductsLoading } = useFetchAllProducts();
  const { newProducts, isLoading: isNewProductsLoading } =
    useFetchAllNewProducts();
  const { promoteProducts, isLoading: isPromoteProductsLoading } =
    useFetchAllPromotionProducts();
  const { bestSellerProducts, isLoading: isBestSellerProductsLoading } =
    useFetchAllBestSellerProducts();

  {
    /* <div className="mb-5 pb-5">
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
        </div> */
  }

  return (
    <div>
      {/* <ListProducts
        title={"Tất cả sản phẩm"}
        listProducts={products}
        isListProductsLoading={isProductsLoading}
      /> */}
      <ListProducts
        title={"Sản phẩm mới"}
        listProducts={newProducts}
        isListProductsLoading={isNewProductsLoading}
      />
      <ListProducts
        title={"Sản phẩm đang được khuyến mãi"}
        listProducts={promoteProducts}
        isListProductsLoading={isPromoteProductsLoading}
      />
      <ListProducts
        title={"Sản phẩm bán chạy"}
        listProducts={bestSellerProducts}
        isListProductsLoading={isBestSellerProductsLoading}
      />
    </div>
  );
};

export default Products;