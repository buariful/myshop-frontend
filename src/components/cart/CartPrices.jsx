import React from "react";
import { LargeButton } from "../../widgets/Buttons";
import { Title1 } from "../../widgets/Titles";

const CartPrices = () => {
  return (
    <>
      <Title1 text="Cart Tools" />

      <div className="bg-[#F4F4FC] max-w-lg mx-auto rounded px-4 py-8">
        <div className="border-b py-1 flex justify-between items-center mb-3">
          <p className="text-heading text-sm ">Subtotals</p>
          <p className="text-heading text-sm font-semibold">$219.0</p>
        </div>

        <div className="border-b py-1 flex justify-between items-center mb-3">
          <p className="text-heading text-sm">Totals</p>
          <p className="text-heading text-sm font-semibold">$219.0</p>
        </div>

        <p className="text-xs text-gray-500 mb-4 text-start">
          Shipping and taxes will calculated at checkout
        </p>

        <LargeButton text={"Proceed to checkout"} />
      </div>
    </>
  );
};

export default CartPrices;
