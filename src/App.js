import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./components/Cart";
import Login from "./components/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/products/Products";
import Product from "./components/products/Product";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import Orders from "./components/orders/Orders";
import { useFetchCurrentCredential } from "./hooks/useAuth";
import AdminNavBar from "./components/admins/AdminNavBar";
import AdminLogin from "./components/admins/AdminLogin";
import AdminOrders from "./components/admins/adminOrders/AdminOrders";
import AdminProfile from "./components/admins/adminProfile/AdminProfile";
import AdminStatistics from "./components/admins/AdminStatistics";
import AdminProducts from "./components/admins/adminProducts/AdminProducts";
import AdminProductTypes from "./components/admins/adminProductTypes/AdminProductTypes";
import Register from "./components/Register";

function App() {
  const { currentCredential } = useFetchCurrentCredential();

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        {currentCredential && currentCredential.role === "staff" ? (
          <AdminNavBar />
        ) : (
          <Navbar />
        )}
        <Routes>
          {
            // customer
          }
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:ma_mh" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/orders" element={<Orders />}></Route>

          {
            //admin
          }
          <Route path="/admin" element={<AdminStatistics />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/orders" element={<AdminOrders />}></Route>
          <Route path="/admin/profile" element={<AdminProfile />}></Route>
          <Route path="/admin/products" element={<AdminProducts />}></Route>
          <Route
            path="/admin/product-types"
            element={<AdminProductTypes />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
