import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Buttons from "../../widgets/Buttons";

const Banner = () => {
  let number = [1, 2, 3, 4, 5];

  const slides = number.map((num, i) => {
    return (
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <div className="text-start md:ml-16">
            <p className="text-primary text-sm capitalize font-semibold mb-3">
              Best Furnitures for your castle
            </p>
            <h4 className="text-3xl font-semibold mb-3 ">
              New furniture collection trends in 2023
            </h4>
            <p className="text-gray-500 text-xs mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              earum quae voluptatum illum? Quis, cumque qui? Corporis
              perferendis ipsum unde?
            </p>
            <Buttons text="Shop Now" />
          </div>

          <div>
            <div className="relative max-w-[350px]">
              <img src={require("../../img/Ellipse2.png")} alt="" />
              <img
                src={require("../../img/pink-sofa.png")}
                alt=""
                className="max-w-[280px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className="bg-light-Pink py-10">
        <div className="container px-5 md:px-6">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
