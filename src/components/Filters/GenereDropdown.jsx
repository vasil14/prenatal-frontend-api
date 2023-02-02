import React from "react";
import Checkbox from "../Checkbox";

const GenereDropdown = () => {
  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Filtra per sesso
          </h1>
          <div className="px-5 pb-2 flex flex-row gap-20">
            <Checkbox
              description={"Femmina"}
              rounded={"none"}
              color={"gray-200"}
            />
            <Checkbox
              description={"Unisex"}
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

export default GenereDropdown;
