/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faRightFromBracket,
  faLock,
  faUser,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { TOKEN_LOCAL_STORAGE } from "../../api/constants";
const AdminNavBar = () => {
  const state = useSelector((state) => state.HandleCart);
  const [token, setToken] = useState("");
  const localStorageToken = localStorage.getItem(TOKEN_LOCAL_STORAGE);

  useEffect(() => {
    setToken(localStorageToken);
  }, [localStorageToken]);

  localStorage.setItem("cart", JSON.stringify(state));

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/admin">
            B Balo Shop Admin
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Sản phẩm
                </NavLink>
              </li>
            </ul> */}

            <div className="buttons">
              {!token && (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark">
                    Đăng nhập
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faRightFromBracket}
                    />
                  </NavLink>
                </>
              )}

              {token && (
                <>
                  <NavLink
                    to="/admin/orders"
                    className="btn btn-outline-dark mx-2"
                  >
                    QL đơn đặt hàng
                    <FontAwesomeIcon className="ms-2" icon={faReceipt} />
                  </NavLink>
                  <NavLink to="/admin/profile" className="btn btn-outline-dark">
                    Cá nhân NV
                    <FontAwesomeIcon className="ms-2" icon={faUser} />
                  </NavLink>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    <NavLink to="/admin/login" className="btn btn-outline-dark">
                      Đăng xuất
                      <FontAwesomeIcon className="ms-2" icon={faLock} />
                    </NavLink>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavBar;
