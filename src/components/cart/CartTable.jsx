import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Title1 } from "../../widgets/Titles";

const CartTable = () => {
  let tableRow = (
    <tr className="border-b">
      <td colSpan="2" className="py-2 px-2 whitespace-nowrap ">
        <div className="flex items-center gap-3 text-start">
          <div className="relative">
            <img
              src={require("../../img/chair.png")}
              alt="chair"
              className="max-w-[50px] bg-gray-100 rounded"
            />
            <button className="absolute bg- -top-1 -right-1">
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="text-xs">
            <p>
              <b>Ur dan Hoda</b>
            </p>
            <p>Color: Brown</p>
            <p>Size: XL</p>
          </div>
        </div>
      </td>
      <td className="font-semibold py-2 px-2 whitespace-nowrap ">$32.00</td>
      <td className="py-2 px-2 whitespace-nowrap ">
        <div className="flex items-center">
          <button className="bg-[#E7E7EF] w-5 h-5">-</button>
          <span className="h-5 w-8 text-center bg-[#F0EFF2] text-[10px] font-semibold">
            1
          </span>
          <button className="bg-[#E7E7EF] h-5 w-5">+</button>
        </div>
      </td>
      <td className="font-semibold py-2 px-2 whitespace-nowrap ">$256</td>
    </tr>
  );

  return (
    <>
      <div className="max-w-lg lg:max-w-3xl mx-auto overflow-auto mb-8">
        <table className="w-full text-start text-sm ">
          <thead>
            <tr>
              <th scope="col" colSpan="2" className="text-start">
                <Title1 text="Product" />
              </th>
              <th scope="col" className="text-start">
                <Title1 text="Price" />
              </th>
              <th scope="col" className="text-start">
                <Title1 text="Quantity" />
              </th>
              <th scope="col" className="text-start">
                <Title1 text="Total" />
              </th>
            </tr>
          </thead>

          <tbody>
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}

            {/* <tr className="border-b">
              <td colSpan="2" className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center gap-3 text-start">
                  <div className="relative">
                    <img
                      src={require("../../img/")}
                      alt="chair"
                      className="max-w-[50px] bg-gray-100 rounded"
                    />
                    <button className="absolute bg- -top-1 -right-1">
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="text-xs">
                    <p>
                      <b>Ur dan Hoda</b>
                    </p>
                    <p>Color: Brown</p>
                    <p>Size: XL</p>
                  </div>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $32.00
              </td>
              <td className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center">
                  <button className="bg-[#E7E7EF] w-5 h-5">-</button>
                  <span className="h-5 w-8 text-center bg-[#F0EFF2] text-[10px] font-semibold">
                    1
                  </span>
                  <button className="bg-[#E7E7EF] h-5 w-5">+</button>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $256
              </td>
            </tr>
            <tr className="border-b">
              <td colSpan="2" className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center gap-3 text-start">
                  <div className="relative">
                    <img
                      src={require("../img/chair.png")}
                      alt="chair"
                      className="max-w-[50px] bg-gray-100 rounded"
                    />
                    <button className="absolute bg- -top-1 -right-1">
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="text-xs">
                    <p>
                      <b>Ur dan Hoda</b>
                    </p>
                    <p>Color: Brown</p>
                    <p>Size: XL</p>
                  </div>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $32.00
              </td>
              <td className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center">
                  <button className="bg-[#E7E7EF] w-5 h-5">-</button>
                  <span className="h-5 w-8 text-center bg-[#F0EFF2] text-[10px] font-semibold">
                    1
                  </span>
                  <button className="bg-[#E7E7EF] h-5 w-5">+</button>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $256
              </td>
            </tr>
            <tr className="border-b">
              <td colSpan="2" className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center gap-3 text-start">
                  <div className="relative">
                    <img
                      src={require("../img/chair.png")}
                      alt="chair"
                      className="max-w-[50px] bg-gray-100 rounded"
                    />
                    <button className="absolute bg- -top-1 -right-1">
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="text-xs">
                    <p>
                      <b>Ur dan Hoda</b>
                    </p>
                    <p>Color: Brown</p>
                    <p>Size: XL</p>
                  </div>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $32.00
              </td>
              <td className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center">
                  <button className="bg-[#E7E7EF] w-5 h-5">-</button>
                  <span className="h-5 w-8 text-center bg-[#F0EFF2] text-[10px] font-semibold">
                    1
                  </span>
                  <button className="bg-[#E7E7EF] h-5 w-5">+</button>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $256
              </td>
            </tr>
            <tr className="border-b">
              <td colSpan="2" className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center gap-3 text-start">
                  <div className="relative">
                    <img
                      src={require("../img/chair.png")}
                      alt="chair"
                      className="max-w-[50px] bg-gray-100 rounded"
                    />
                    <button className="absolute bg- -top-1 -right-1">
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="text-xs">
                    <p>
                      <b>Ur dan Hoda</b>
                    </p>
                    <p>Color: Brown</p>
                    <p>Size: XL</p>
                  </div>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $32.00
              </td>
              <td className="py-2 px-2 whitespace-nowrap ">
                <div className="flex items-center">
                  <button className="bg-[#E7E7EF] w-5 h-5">-</button>
                  <span className="h-5 w-8 text-center bg-[#F0EFF2] text-[10px] font-semibold">
                    1
                  </span>
                  <button className="bg-[#E7E7EF] h-5 w-5">+</button>
                </div>
              </td>
              <td className="font-semibold py-2 px-2 whitespace-nowrap ">
                $256
              </td>
            </tr> */}
          </tbody>
        </table>

        <div className="flex justify-end">
          <button className="bg-primary text-white px-4 py-1 text-sm mt-5">
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTable;
