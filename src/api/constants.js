export const ALLOW_CORS = "http://localhost:8080/";

export const API_ENDPOINT = "http://localhost:5000/api";

export const BASE_URL = `${ALLOW_CORS}${API_ENDPOINT}`;

export const TOKEN_LOCAL_STORAGE = "authorization";

const API_CONSTANTS = {
  AUTH: {
    GET_CURRENT_CREDENTIAL: "/auth",
    SIGNUP_CUSTOMER: "/auth/signup-customer",
    LOGIN_CUSTOMER: "/auth/login-customer",
    LOGIN_STAFF: "/auth/login-staff",
    SIGNUP_STAFF: "/auth/signup-staff",
  },
  CUSTOMERS: {
    GET_ALL: "/khach-hang/find-all",
    GET_ONE: (ma_kh) => `/khach-hang/find-one/${ma_kh}`,
    GET_ME: "/khach-hang/find-me",
    UPDATE: (ma_kh) => `/khach-hang/${ma_kh}`,
  },
  STAFFS: {
    GET_ALL: "/nhan-vien/find-all",
    GET_ONE: (ma_nv) => `/nhan-vien/find-one/${ma_nv}`,
    GET_ME: "/nhan-vien/find-me",
  },
  SUPPLIER: {
    GET: "/nha-cung-cap",
    CREATE: "/nha-cung-cap",
    UPDATE: (ma_ncc) => `/nha-cung-cap/${ma_ncc}`,
    DELETE: (ma_ncc) => `/nha-cung-cap/${ma_ncc}`,
  },
  PRODUCTS: {
    GET_ALL: "/mat-hang",
    GET_ONE: (ma_mh) => `/mat-hang/${ma_mh}`,
    CREATE: "/mat-hang",
    UPDATE: (ma_mh) => `/mat-hang/${ma_mh}`,
    DELETE: (ma_mh) => `/mat-hang/${ma_mh}`,
    SEARCH: "mat-hang/search",
  },
  PRODUCTS_TYPE: {
    GET: "/loai-mat-hang",
  },
  ADVERTISEMENT: {
    GET: "/quang-cao",
    CREATE: "/quang-cao",
    UPDATE: (ma_qc) => `/quang-cao/${ma_qc}`,
    DELETE: (ma_qc) => `/quang-cao/${ma_qc}`,
  },
  ORDERS: {
    GET_ALL: "/don-dat-hang",
    CREATE: "/don-dat-hang",
    PURCHASE: "/don-dat-hang/purchase",
    GET_ONE: (ma_don_dat_hang) => `don-dat-hang/find-one/${ma_don_dat_hang}`,
    BROWSE: "/don-dat-hang/browse",
    DELIVERED: (ma_don_dat_hang) =>
      `/don-dat-hang/delivered/${ma_don_dat_hang}`,
  },
  ORDERS_STATUS: {
    GET: "/trang-thai-ddh",
  },
  COMMENT: {
    GET_BY_PRODUCT: (ma_mh) => `/binh-luan/${ma_mh}`,
    CREATE: "/binh-luan",
  },
};

export default API_CONSTANTS;
