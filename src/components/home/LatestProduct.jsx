import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { SectionTitle } from "../../widgets/Titles";

const LatestProduct = () => {
  let number = [1, 2, 3, 4, 5];
  const productCard = number.map(() => {
    return (
      <div className="shadow-lg">
        <div className="p-3 bg-[#F7F7F7]">
          <div className="flex gap-1 items-center">
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
            className="mx-auto my-2 max-w-[110px] h-[130px]"
          />
        </div>

        <div className="flex items-center justify-between p-2">
          <p className="text-[13px]">Lorem, ipsum dolor.</p>
          <p className="font-bold text-heading">$20.0</p>
        </div>
      </div>
    );
  });

  return (
    <div className="mb-12">
      <SectionTitle text="Latest Products" />
      <div className="container px-5 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {productCard}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
