import React from "react";
import Checkbox from "../Checkbox";

const TagliaDropdown = () => {
  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
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
        {/* Intimo, pigiami e calze mamma */}
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Intimo, pigiami e calze mamma
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
              description={"S | 40-42"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"M | 42-44"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"L | 46-48"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"XL | 48-50"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"XXL | 50-52"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"S-M | 40-44"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"L-XL | 46-50"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox description={"1"} rounded={"none"} color={"gray-200"} />
            <Checkbox description={"2"} rounded={"none"} color={"gray-200"} />
            <Checkbox description={"3"} rounded={"none"} color={"gray-200"} />
            <Checkbox description={"4"} rounded={"none"} color={"gray-200"} />
            <Checkbox description={"5"} rounded={"none"} color={"gray-200"} />
            <Checkbox
              description={"Taglia unica"}
              rounded={"none"}
              color={"gray-200"}
            />
          </div>
        </div>
        {/* Pantofole mamma */}
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Pantofole mamma
          </h1>
          <div className="px-5 pb-2 overflow-y-auto max-h-96">
            <Checkbox
              description={"36-37"}
              rounded={"none"}
              color={"gray-200"}
              h={"20px"}
              w-={"20px"}
            />
            <Checkbox
              description={"38-39"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"40-41"}
              rounded={"none"}
              color={"gray-200"}
            />
          </div>
        </div>
        <div className="w-full px-5 pb-3 pt-5">
          <button
            className="rounded-full bg-primary text-white  text-sm font-normal uppercase px-5 py-1.5"
            aria-label="Applica"
          >
            <span className="px-4 py-1">applica</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagliaDropdown;
