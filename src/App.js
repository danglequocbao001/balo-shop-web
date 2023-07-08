import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Slider from "./components/Slider";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/slider" element={<Slider/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
