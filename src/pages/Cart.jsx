import React from "react";
import CartTable from "../components/cart/CartTable";
import CartPrices from "../components/cart/CartPrices";

const Cart = () => {
  return (
    <section className="p-2">
      <div className="container ">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-8">
              <CartTable />
            </div>

            <div className="col-span-12 md:col-span-4 ">
              <CartPrices />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
