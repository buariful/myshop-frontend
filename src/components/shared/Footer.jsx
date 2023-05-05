import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#E7E4F8] flex justify-around py-4">
        <p className="flex items-center">
          <AiOutlineCopyrightCircle />
          All rights reserved
        </p>
        <div className="center gap-2">
          <a
            href="#"
            className="center rounded-full bg-heading hover:bg-white hover:text-heading transition w-[20px] h-[20px] text-white text-xs"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="center rounded-full bg-heading hover:bg-white hover:text-heading transition w-[20px] h-[20px] text-white text-xs"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="center rounded-full bg-heading hover:bg-white hover:text-heading transition w-[20px] h-[20px] text-white text-xs"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
