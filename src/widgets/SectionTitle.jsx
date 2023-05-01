import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div>
      <h2 className="font-josef text-[20px] font-bold text-heading mb-3 capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
