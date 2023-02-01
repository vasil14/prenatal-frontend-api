import React from "react";
import Checkbox from "../Checkbox";

const FilterDropdown = () => {
  return (
    <div className="absolute w-full bg-white drop-shadow-xl">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5">
            Abbigliamento mamma
          </h1>
          <div className="px-5 pb-2 overflow-y-auto max-h-96">
            <Checkbox
              description={"XXS | 36-38"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"XS | 38-40"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"S | 40-42"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"M | 42-44"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"L | 46-48"}
              rounded={"none"}
              color={"gray-200"}
            />
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
        </div>
        <div className="w-full px-5 py-3">
          <button
            className="rounded-full bg-[#e72b6f] text-white  text-sm font-normal uppercase px-5 py-1.5"
            aria-label="Applica"
          >
            <span className="px-4 py-1">applica</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
