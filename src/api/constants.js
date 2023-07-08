export const BASE_URL = "http://localhost:5000/api";

export const TOKEN_LOCAL_STORAGE = "authorization";

const API_CONSTANTS = {
  AUTH: {
    SIGNUP_CUSTOMER: "/auth/signup-customer",
    LOGIN_CUSTOMER: "/auth/login-customer",
    LOGIN_STAFF: "/auth/login-staff",
    // FORGET_PASSWORD: "/forget-password",
    // RESET_PASSWORD: "/reset-password",
    // UPDATE_PASSWORD: "/update-password",
  },
  CUSTOMERS: {
    GET: "/khach-hang",
  },
  STAFFS: {
    GET: "/nhan-vien",
    POST: "/nhan-vien",
  },
  SUPPLIER: {
    GET: "/nha-cung-cap",
    POST: "/nha-cung-cap",
    PUT: (ma_ncc) => `/nha-cung-cap/${ma_ncc}`,
    DELETE: (ma_ncc) => `/nha-cung-cap/${ma_ncc}`,
  },
  PRODUCTS: {
    GET: "/mat-hang",
    POST: "/mat-hang",
    PUT: (ma_mh) => `/mat-hang/${ma_mh}`,
    DELETE: (ma_mh) => `/mat-hang/${ma_mh}`,
  },
  PRODUCTS_TYPE: {
    GET: "/loai-mat-hang",
  },
  ADVERTISEMENT: {
    GET: "/quang-cao",
    POST: "/quang-cao",
    PUT: (ma_qc) => `/quang-cao/${ma_qc}`,
    DELETE: (ma_qc) => `/quang-cao/${ma_qc}`,
  },
  ORDERS_STATUS: {
    GET: "/trang-thai-ddh",
  },
};

export default API_CONSTANTS;
