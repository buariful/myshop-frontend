import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import "./featuredProduct.css";
import { SectionTitle } from "../../widgets/Titles";

const FeaturedProducts = () => {
  const featuredCard = (
    <div className="shadow-lg featCard__wrapper">
      <div className="p-3 bg-[#F7F7F7]">
        <div className="featCard__icons flex gap-1 items-center">
          <button className=" hover:bg-[#EEEFFB] duration-500 p-1 rounded-full text-[#1DB4E7] hover:text-[#2F1AC4]">
            <AiOutlineShoppingCart className="" />
          </button>
          <button className=" hover:bg-[#EEEFFB] duration-500 p-1 rounded-full text-[#1DB4E7] hover:text-[#2F1AC4]">
            <GiSelfLove />
          </button>
          <button className=" hover:bg-[#EEEFFB] duration-500 p-1 rounded-full text-[#1DB4E7] hover:text-[#2F1AC4]">
            <AiOutlineShoppingCart className="" />
          </button>
        </div>

        <img
          src={require("../../img/chair.png")}
          alt=""
          className="mx-auto my-2 max-w-[85px]"
        />

        <button className="featCard__btn bg-[#08D15F] text-white fotn-josef text-xs px-4 py-1 rounded capitalize">
          Buy now
        </button>
      </div>

      <div className="py-1">
        <h5 className="text-primary font-semibold capitalize mb-1 featCard__text">
          Cantilever chair
        </h5>

        <div className="center gap-1 mb-1">
          <span className="h-1 w-4 bg-red-500 rounded-lg"></span>
          <span className="h-1 w-4 bg-red-500 rounded-lg"></span>
          <span className="h-1 w-4 bg-red-500 rounded-lg"></span>
        </div>

        <p className="text-heading font-josef mb-1 featCard__text">
          Code-Y5678
        </p>
        <p className="text-heading font-josef featCard__text">$56.00</p>
      </div>
    </div>
  );

  return (
    <section className="mt-6 mb-12">
      <SectionTitle text="Featured products" />
      <div className="container px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {featuredCard}
          {featuredCard}
          {featuredCard}
          {featuredCard}
          {featuredCard}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
