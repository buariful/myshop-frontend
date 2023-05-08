import React from "react";

const Buttons = ({ text }) => {
  return (
    <div>
      {" "}
      <button className="bg-primary text-white px-4 py-1 text-sm">
        {text}
      </button>
    </div>
  );
};

export const LargeButton = ({ text }) => {
  return (
    <button className="w-full max-w-sm mx-auto text-white bg-[#19D16F] py-2 text-sm rounded">
      {text}
    </button>
  );
};

export default Buttons;
