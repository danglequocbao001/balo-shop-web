import React from "react";
import Products from "./products/Products";
import Advertisement from "./advertisement/Advertisement";

const Home = () => {
  return (
    <div className="hero">
      <div className=" text-bg-light border-0">
        <Advertisement />
      </div>
      <Products />
    </div>
  );
};

export default Home;
