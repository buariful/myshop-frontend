import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Buttons from "../../widgets/Buttons";
import "./offer.css";
import { SectionTitle } from "../../widgets/Titles";

const Offer = () => {
  return (
    <section className="mb-12">
      <SectionTitle text="What we offer" />

      {/* top section */}
      <div className="container px-3">
        <div className="center gap-4 flex-wrap  mb-12">
          <div className="flex flex-col gap-2 justify-center max-w-[350px] shadow-md p-4">
            <img
              src={require("../../img/24-hours-support 1.png")}
              alt=""
              className="max-w-[50px] mx-auto"
            />
            <h5 className="text-heading font-semibold">24/7 Service</h5>
            <p className="text-gray-500 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet doloribus ea laudantium repellendus magnam?
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center max-w-[350px] shadow-md p-4">
            <img
              src={require("../../img/free-delivery 1.png")}
              alt=""
              className="max-w-[50px] mx-auto"
            />
            <h5 className="text-heading font-semibold">Free Delivery</h5>
            <p className="text-gray-500 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet doloribus ea laudantium repellendus magnam?
            </p>
          </div>

          <div className="flex flex-col gap-2 justify-center max-w-[350px] shadow-md p-4">
            <img
              src={require("../../img/premium-quality 1.png")}
              alt=""
              className="max-w-[50px] mx-auto"
            />
            <h5 className="text-heading font-semibold">Premium quality</h5>
            <p className="text-gray-500 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet doloribus ea laudantium repellendus magnam?
            </p>
          </div>
        </div>
      </div>

      {/* bottom seciton */}
      <div className="bg-light-Pink py-10 mb-4">
        <div className="container px-3">
          <div className="center flex-col md:flex-row gap-4">
            <div className="relative">
              <img
                src={require("../../img/Ellipse.png")}
                alt=""
                className="max-w-[300px]"
              />
              <img
                src={require("../../img/pink-sofa.png")}
                alt=""
                className="max-w-[230px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-heading mb-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h4>
              <ul className="mb-3">
                <li className="flex gap-2 items-center text-sm text-gray-500 mb-2 text-start">
                  {" "}
                  <AiOutlineShoppingCart />{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, dolore!
                  </span>
                </li>
                <li className="flex gap-2 items-center text-sm text-gray-500 mb-2 text-start">
                  {" "}
                  <AiOutlineShoppingCart />{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, dolore! Lorem ipsum dolor sit amet.
                  </span>
                </li>
                <li className="flex gap-2 items-center text-sm text-gray-500 mb-2 text-start">
                  {" "}
                  <AiOutlineShoppingCart />{" "}
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, dolore!
                  </span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <Buttons text="Add to cart" />
                <span className="text-heading2 text-sm text-start font-semibold">
                  Lorem ipsum dolor sit amet
                  <br /> consectetur adipisicing.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
