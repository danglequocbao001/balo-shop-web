import { NavLink } from "react-router-dom";
import COLOR_CONSTANTS from "../../constants/colors";
import moneyFormatter from "../../helpers/money";

const ProductItem = (param) => {
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
          width: 170,
          height: 40,
          backgroundColor: COLOR_CONSTANTS.SUCCESS,
          position: "absolute",
          zIndex: 1,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 10,
          paddingTop: 7,
          marginLeft: 136,
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
        {param.productDetail !== true && (
          <span style={{ fontSize: 20, marginTop: 20 }}>
            {`${param.product.ma_loai_mh}/${param.product.loai_mat_hang.ten_loai_mh}`}
          </span>
        )}
        <img
          src={param.product.hinh_anh}
          className="card-img-top"
          height={param.productDetail !== true ? "250px" : "350px"}
          width={param.productDetail !== true ? "" : "150px"}
          alt={param.product.loai_mat_hang.ten_loai_mh}
        />
        {param.productDetail !== true && (
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
              {`Giá: ${moneyFormatter.format(param.product.gia)}`}
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
            {param.productDetail !== true && (
              <NavLink
                to={`/products/${param.product.ma_mh}`}
                className="btn btn-dark"
              >
                Mua ngay
              </NavLink>
            )}
          </div>
        )}
        {param.product.is_new === true && isNew()}
      </div>
    </div>
  );
};

export default ProductItem;
