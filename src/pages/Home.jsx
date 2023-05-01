import React from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import LatestProduct from "../components/home/LatestProduct";
import Offer from "../components/home/Offer";
import Banner from "../components/home/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <LatestProduct />
      <Offer />
    </>
  );
};

export default Home;
