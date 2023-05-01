import React from "react";
import SectionTitle from "../../widgets/SectionTitle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Buttons from "../../widgets/Buttons";

const Offer = () => {
  return (
    <>
      <SectionTitle text="What we offer" />

      <div className="container px-3 mb-4">
        <div className="center gap-4 flex-wrap">
          <div className="flex flex-col gap-2 justify-center max-w-[350px] shadow-md p-4">
            <img
              src="https://res.cloudinary.com/dygolqxi7/image/upload/…82554171/myshop%28furniture%29/image_1_pnpqvr.png"
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
              src="https://res.cloudinary.com/dygolqxi7/image/upload/…82554171/myshop%28furniture%29/image_1_pnpqvr.png"
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
              src="https://res.cloudinary.com/dygolqxi7/image/upload/…82554171/myshop%28furniture%29/image_1_pnpqvr.png"
              alt=""
              className="max-w-[50px] mx-auto"
            />
            <h5 className="text-heading font-semibold">24/7 Service</h5>
            <p className="text-gray-500 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              amet doloribus ea laudantium repellendus magnam?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light-Pink py-3 mb-4">
        <div className="container px-3">
          <div className="center gap-4">
            <div>
              <img
                src="https://res.cloudinary.com/dygolqxi7/image/upload/…82554171/myshop%28furniture%29/image_1_pnpqvr.png"
                alt=""
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
    </>
  );
};

export default Offer;
