import React from "react";

export const SectionTitle = ({ text }) => {
  return (
    <div>
      <h3 className="font-josef text-[20px] font-bold text-heading mb-3 capitalize">
        {text}
      </h3>
    </div>
  );
};

export const Title1 = ({ text }) => {
  return (
    <div>
      <h4 className="font-josef text-[17px] font-bold text-heading mb-3 capitalize">
        {text}
      </h4>
    </div>
  );
};
