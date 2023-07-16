import React, { useEffect, useState } from "react";
import { fetchSearchProduct } from "../../services/products";
import { toast } from "react-toastify";
import ListProducts from "../products/ListProducts";
import { Select, Button, Typography, Input } from "antd";
import { useFetchAllProducts } from "../../hooks/useProducts";
import COLOR_CONSTANTS from "../../constants/colors";

const { Text, Title } = Typography;

const innputItem = {
  display: "flex",
  width: 200,
  alignItems: "center",
  marginRight: 15,
};

const inputItemLabel = {
  height: 30,
  width: 150,
  marginTop: 5,
};

const inputHead = {
  marginBottom: 20,
};

const inputHeadLabel = {
  fontSize: 16,
};

const Search = () => {
  const { products: allProducts } = useFetchAllProducts();
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [paramSearch, setParamSearch] = useState({
    ten_mh: null,
    nha_san_xuat: null,
    mo_ta: null,
    gia_min: null,
    gia_max: null,
    ten_loai_mh: null,
  });

  const getUniqueNhaSanXuat = (products) => {
    const uniqueNhaSanXuat = [
      ...new Set(products.map((product) => product.nha_san_xuat)),
    ];
    const uniqueNhaSanXuatObjects = uniqueNhaSanXuat
      .map((item) => ({ value: item, label: item }))
      .sort((a, b) => a.label.localeCompare(b.label));
    uniqueNhaSanXuatObjects.unshift({ value: null, label: "Tất cả" });

    return uniqueNhaSanXuatObjects;
  };

  const getUniqueLoaiMatHang = (data) => {
    const loaiMatHangs = data.map((item) => item.loai_mat_hang.ten_loai_mh);
    const uniqueLoaiMatHangs = [...new Set(loaiMatHangs)];
    const formattedLoaiMatHangs = uniqueLoaiMatHangs
      .sort()
      .map((loaiMatHang) => ({
        value: loaiMatHang,
        label: loaiMatHang,
      }));
    formattedLoaiMatHangs.unshift({ value: null, label: "Tất cả" });
    return formattedLoaiMatHangs;
  };

  const onSearch = async (paramSearch) => {
    setLoading(true);
    try {
      const data = await fetchSearchProduct(paramSearch);
      setProducts(data);
      toast.success("Tìm kiếm thành công");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const effectSearch = async (paramSearch) => {
    setLoading(true);
    try {
      const data = await fetchSearchProduct(paramSearch);
      setProducts(data);
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    effectSearch(paramSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {products && allProducts && (
        <>
          <div style={{ padding: "0px 200px", marginTop: 50 }}>
            <div>
              <div style={inputHead}>
                <Text style={inputHeadLabel}>Tên mặt hàng</Text>
                <Input
                  placeholder="Nhập tên mặt hàng"
                  onChange={(e) => {
                    setParamSearch({
                      ...paramSearch,
                      ten_mh: e.target.value,
                    });
                  }}
                />
              </div>
              <div style={inputHead}>
                <Text style={inputHeadLabel}>Mô tả</Text>
                <Input
                  placeholder="Nhập mô tả"
                  onChange={(e) => {
                    setParamSearch({
                      ...paramSearch,
                      mo_ta: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <div style={{ marginRight: 15 }}>
                <Text>Nhà sản xuất</Text>
                <Select
                  style={{ width: 120 }}
                  defaultValue={"Tất cả"}
                  onChange={(nha_san_xuat) => {
                    setParamSearch({
                      ...paramSearch,
                      nha_san_xuat: nha_san_xuat,
                    });
                  }}
                  options={getUniqueNhaSanXuat(allProducts)}
                />
              </div>
              <div style={{ marginRight: 15 }}>
                <Text>Loại mặt hàng</Text>
                <Select
                  style={{ width: 120 }}
                  defaultValue={"Tất cả"}
                  onChange={(ten_loai_mh) => {
                    setParamSearch({
                      ...paramSearch,
                      ten_loai_mh: ten_loai_mh,
                    });
                  }}
                  options={getUniqueLoaiMatHang(allProducts)}
                />
              </div>
              <div style={innputItem}>
                <Text style={inputItemLabel}>Giá tối thiểu</Text>
                <Input
                  placeholder="Nhập giá tối thiểu"
                  onChange={(e) => {
                    setParamSearch({
                      ...paramSearch,
                      gia_min: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
              <div style={innputItem}>
                <Text style={{ ...inputItemLabel, marginRight: -20 }}>
                  Giá tối đa
                </Text>
                <Input
                  placeholder="Nhập giá tối đa"
                  onChange={(e) => {
                    setParamSearch({
                      ...paramSearch,
                      gia_max: parseInt(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <Button
              onClick={() => onSearch(paramSearch)}
              style={{
                backgroundColor: COLOR_CONSTANTS.BLACK,
                border: "none",
                color: COLOR_CONSTANTS.WHITE,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              Tìm kiếm
            </Button>
          </div>

          <ListProducts
            title={"Danh sách sản phẩm"}
            listProducts={products}
            isListProductsLoading={isLoading}
          />
        </>
      )}
      {products.length === 0 && (
        <Title style={{ fontSize: 30, textAlign: "center" }}>
          Không tìm thấy sản phẩm
        </Title>
      )}
    </>
  );
};

export default Search;
