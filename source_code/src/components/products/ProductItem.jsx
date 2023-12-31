import { NavLink } from "react-router-dom";
import COLOR_CONSTANTS from "../../constants/colors";
import moneyFormatter from "../../helpers/money";
import { TOKEN_LOCAL_STORAGE } from "../../api/constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/action";
import { Button, Image } from "antd";

const ProductItem = (param) => {
  const productDetailAndCartNoUse = !(
    (param.productDetail === true && param.isCart === undefined) ||
    (param.productDetail === undefined && param.isCart === true)
  );

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (localStorage.getItem(TOKEN_LOCAL_STORAGE) === null) {
      toast.warn("Bạn cần đăng nhập trước!");
    } else {
      toast.success("Thêm vào giỏ hàng thành công!");
      dispatch(addItem(product));
    }
  };

  const khuyenMai = () => {
    return (
      <div
        style={{
          width: 55,
          height: 40,
          backgroundColor: COLOR_CONSTANTS.ERROR,
          position: "absolute",
          zIndex: 1,
          borderTopLeftRadius: 5,
          borderBottomRightRadius: 10,
          paddingTop: 7,
          marginTop: 0.5,
        }}
      >
        <span
          style={{
            color: COLOR_CONSTANTS.WHITE,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          {`-${param.product.khuyen_mai.phan_tram_giam_gia}%`}
        </span>
      </div>
    );
  };

  const chiTietDaBan = () => {
    return (
      <div
        style={{
          width: 175,
          height: 40,
          backgroundColor: COLOR_CONSTANTS.SUCCESS,
          position: "absolute",
          zIndex: 1,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 10,
          paddingTop: 7,
          marginLeft: 132,
          marginTop: 0.5,
        }}
      >
        <span
          style={{
            color: COLOR_CONSTANTS.WHITE,
            fontWeight: "bold",
            marginLeft: 7,
          }}
        >
          {`Bán chạy (đã bán ${param.product.chi_tiet_da_ban.tong_so_da_ban})`}
        </span>
      </div>
    );
  };

  const isNew = () => {
    return (
      <div
        style={{
          width: 130,
          height: 40,
          backgroundColor: COLOR_CONSTANTS.WARNING,
          position: "absolute",
          zIndex: 1,
          borderBottomLeftRadius: 5,
          borderTopRightRadius: 10,
          paddingTop: 7,
          bottom: 0,
          left: 0,
        }}
      >
        <span
          style={{
            color: COLOR_CONSTANTS.WHITE,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Sản phẩm mới
        </span>
      </div>
    );
  };

  return (
    <div className="col-md-3 mb-4">
      {param.product.khuyen_mai && khuyenMai()}
      {param.product.chi_tiet_da_ban && chiTietDaBan()}
      <div
        className="card h-100px text-center p-4"
        style={{
          width: 307,
        }}
      >
        {productDetailAndCartNoUse && (
          <span style={{ fontSize: 20, marginTop: 20 }}>
            {`${param.product.ma_loai_mh}/${param.product.loai_mat_hang.ten_loai_mh}`}
          </span>
        )}
        <Image
          src={param.product.hinh_anh}
          className="card-img-top"
          alt={param.product.loai_mat_hang.ten_loai_mh}
          style={
            productDetailAndCartNoUse
              ? {
                  height: 250,
                  width: 250,
                }
              : {
                  height: 150,
                  width: 150,
                  marginLeft: 50,
                }
          }
        />
        {productDetailAndCartNoUse && (
          <div className="card-body" style={{ marginBottom: 20 }}>
            <h5 className="card-title">{param.product.ten_mh}</h5>
            <p
              className="card-text"
              style={{
                textDecoration: param.product.khuyen_mai
                  ? "line-through"
                  : "none",
                fontWeight: param.product.khuyen_mai ? "300" : "bold",
              }}
            >
              {`Giá: ${moneyFormatter.format(
                param.product.thay_doi_gia.gia_dang_ap_dung
              )}`}
            </p>
            {param.product.khuyen_mai && (
              <p
                className="card-text"
                style={{
                  fontWeight: "bold",
                }}
              >
                {`Giảm còn: ${moneyFormatter.format(
                  param.product.khuyen_mai.gia_sau_khi_giam
                )}`}
              </p>
            )}
            <p className="card-text">
              {param.product.mo_ta.length > 28
                ? `${param.product.mo_ta.substring(0, 28)}...`
                : param.product.mo_ta}
            </p>
            <p className="card-text">{`Còn lại: ${param.product.so_luong}`}</p>
            <p className="card-text">{`Nhà sản xuất: ${param.product.nha_san_xuat}`}</p>
            {productDetailAndCartNoUse && (
              <>
                <NavLink
                  to={`/products/${param.product.ma_mh}`}
                  className="btn btn-dark"
                >
                  Chi tiết
                </NavLink>
                <Button
                  onClick={() => addProduct(param.product)}
                  className="btn btn-dark"
                  style={{
                    height: 40,
                    marginTop: 5,
                    color: COLOR_CONSTANTS.WHITE,
                    border: "none",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </>
            )}
          </div>
        )}
        {param.product.is_new === true && isNew()}
      </div>
    </div>
  );
};

export default ProductItem;
