import React from "react";
import Checkbox from "../Checkbox";

const ColoreDropdown = () => {
  return (
    <div className="absolute w-full bg-white drop-shadow-xl z-40 ">
      <div className="flex flex-wrap">
        {/* Abbigliamento mamma */}
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5">
            Abbigliamento mamma
          </h1>
          <div className="px-5 pb-2 w-full">
            <div className="grid grid-cols-5 gap-10">
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
              <div className="ml-4 mt-4 ">
                <Checkbox
                  description={"Beige"}
                  rounded={"none"}
                  color={"gray-200"}
                  h={"20px"}
                  w-={"20px"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-5 pb-3 pt-5">
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

export default ColoreDropdown;
