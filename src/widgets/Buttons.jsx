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

export default Buttons;
