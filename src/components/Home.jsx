import React from "react";
import Products from "./products/Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          height="600px"
          alt="bg"
        />
      </div>
      <Products />
    </div>
  );
};

export default Home;
