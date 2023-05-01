import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* top bar */}
      <section className="bg-secondary text-white text-xs">
        <div className="container py-2">
          <div className="sm:px-10 px-2 flex sm:justify-between justify-around items-center flex-wrap gap-3">
            <ul className="center gap-4 sm:gap-8 ">
              <li className="center gap-1">
                <FaRegEnvelope /> <span>abddddddddc@gmail.com</span>{" "}
              </li>
              <li className="center gap-1">
                <FaPhoneAlt /> <span>+1234556878</span>{" "}
              </li>
            </ul>

            <ul className="center gap-4 sm:gap-8">
              <li className="center gap-1">
                <span>Wishlist</span>
                <GiSelfLove />
              </li>
              <li className="center gap-1">
                <span>Cart</span>
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* bottom nav bar */}
      <section className="py-3">
        <div className="container px-2">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl text-heading2">MyShop</h3>

            <ul className="center gap-3 text-sm font-semibold text-heading2">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>

            <div class="relative flex max-w-full w-[230px] flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              <button
                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HiOutlineSearch />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className="container px-2"></div>
      </section>
    </>
  );
};

export default Navbar;
