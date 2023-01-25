import React from "react";
import Checkbox from "../Checkbox";

const TagliaDropdown = () => {
  return (
    <div className="absolute w-full h-96 bg-white drop-shadow-xl z-50">
      <h1 className="text-[#e72b6f] text-base font-semibold">
        Abbigliamento mamma
      </h1>
      <Checkbox
        description={"XXS | 36-38"}
        rounded={"none"}
        color={"gray-200"}
      />
      <Checkbox
        description={"XS | 38-40"}
        rounded={"none"}
        color={"gray-200"}
      />
      <Checkbox description={"S | 40-42"} rounded={"none"} color={"gray-200"} />
      <Checkbox description={"M | 42-44"} rounded={"none"} color={"gray-200"} />
      <Checkbox description={"L | 46-48"} rounded={"none"} color={"gray-200"} />
      <Checkbox
        description={"XL | 48-50"}
        rounded={"none"}
        color={"gray-200"}
      />
      <Checkbox
        description={"Taglia unica"}
        rounded={"none"}
        color={"gray-200"}
      />
    </div>
  );
};

export default TagliaDropdown;
