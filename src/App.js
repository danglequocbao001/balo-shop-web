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

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Login />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:ma_mh" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/admin/nha-cung-cap" element={<></>}></Route>
          <Route path="/admin/loai-mat-hang" element={<></>}></Route>
          <Route path="/admin/mat-hang" element={<></>}></Route>
          <Route path="/admin/quang-cao" element={<></>}></Route>
          <Route path="/admin/khach-hang" element={<></>}></Route>
          <Route path="/admin/nhan-vien" element={<></>}></Route>
          <Route path="/admin/thong-ke-doanh-thu" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
