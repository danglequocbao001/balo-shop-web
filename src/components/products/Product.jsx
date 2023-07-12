import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/action";
import { useFetchOneProducts } from "../../hooks/useProducts";
import moneyFormatter from "../../helpers/money";
import ProductItem from "./ProductItem";
import { toast } from "react-toastify";

const Product = () => {
  const { ma_mh } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    toast.success("Thêm vào giỏ hàng thành công");
    dispatch(addItem(product));
  };

  const { product, isLoading } = useFetchOneProducts(ma_mh);

  const Loading = () => {
    return <div>...Loading</div>;
  };
  const ShowProduct = () => {
    return (
      <>
        {product && (
          <>
            <div className="col-md-6">
              <ProductItem product={product} productDetail={true} />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black">
                {`${product.ma_loai_mh}/${product.loai_mat_hang.ten_loai_mh}`}
              </h4>
              <h1 className="display-5 fw-bolder">{product.ten_mh}</h1>
              <p
                className="card-text"
                style={{
                  textDecoration: product.khuyen_mai ? "line-through" : "none",
                  fontWeight: product.khuyen_mai ? "300" : "bold",
                  fontSize: 30,
                }}
              >
                {`Giá: ${moneyFormatter.format(
                  product.thay_doi_gia.gia_dang_ap_dung
                )}`}
              </p>
              {product.khuyen_mai && (
                <p
                  className="card-text"
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  {`Giảm còn: ${moneyFormatter.format(
                    product.khuyen_mai.gia_sau_khi_giam
                  )}`}
                </p>
              )}
              <h3 className="my-4">{`Còn lại: ${product.so_luong}`}</h3>
              <h5 className="my-4">{`Mã mặt hàng: ${product.ma_mh}`}</h5>
              <h5 className="my-4">{`Nhà sản xuất: ${product.nha_san_xuat}`}</h5>
              <h5>{`Mô tả: ${product.mo_ta}`}</h5>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Thêm vào giỏ hàng
              </button>
              <Link to="/cart" className="btn btn-outline-dark mx-3">
                Tới giỏ hàng
              </Link>
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-5">
        {isLoading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
