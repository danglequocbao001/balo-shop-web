import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchAllProducts, PRODUCTS_FILTER } from "../../hooks/useProducts";

import ListProducts from "./ListProducts";

const Products = () => {
  // const { products, isLoading: isProductsLoading } = useFetchAllProducts();
  const { products: newProducts, isLoading: isNewProductsLoading } =
    useFetchAllProducts(PRODUCTS_FILTER.NEW);
  const { products: promoteProducts, isLoading: isPromoteProductsLoading } =
    useFetchAllProducts(PRODUCTS_FILTER.PROMOTE);
  const {
    products: bestSellerProducts,
    isLoading: isBestSellerProductsLoading,
  } = useFetchAllProducts(PRODUCTS_FILTER.BEST_SELLER);

  return (
    <div>
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
        listProducts={bestSellerProducts.slice(0, 3)}
        isListProductsLoading={isBestSellerProductsLoading}
      />
      {/* <ListProducts
        title={"Tất cả sản phẩm"}
        listProducts={products}
        isListProductsLoading={isProductsLoading}
      /> */}
    </div>
  );
};

export default Products;
