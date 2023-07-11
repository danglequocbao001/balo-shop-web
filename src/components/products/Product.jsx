import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/action";
import { useFetchOneProducts } from "../../hooks/useProducts";
import moneyFormatter from "../../helpers/money";
const Product = () => {
  const { ma_mh } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
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
              <img
                src={product.hinh_anh}
                alt={product.ten_mh}
                width="400px "
                height={400}
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black">
                {`${product.ma_loai_mh}/${product.loai_mat_hang.ten_loai_mh}`}
              </h4>
              <h1 className="display-5 fw-bolder">{product.ten_mh}</h1>
              <h3 className="my-4">{`Giá: ${moneyFormatter.format(
                product.gia
              )}`}</h3>
              <h3 className="my-4">{`Còn lại: ${product.so_luong}`}</h3>
              <h5 className="my-4">{`Mã mặt hàng: ${product.ma_mh}`}</h5>
              <h5 className="my-4">{`Nhà sản xuất: ${product.nha_san_xuat}`}</h5>
              <h5>{`Mô tả: ${product.mo_ta}`}</h5>
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
