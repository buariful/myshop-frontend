import React from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import LatestProduct from "../components/home/LatestProduct";
import Offer from "../components/home/Offer";

const Home = () => {
  return (
    <>
      <FeaturedProducts />
      <LatestProduct />
      <Offer />
    </>
  );
};

export default Home;
