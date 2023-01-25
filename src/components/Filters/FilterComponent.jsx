import React, { useState } from "react";
import filter from "../../assets/filter.png";
import FilterDropdown from "./FilterDropdown";

import FilterButton from "./FilterButton";
import TagliaDropdown from "./TagliaDropdown";

const FilterComponent = () => {
  const [taglia, setTaglia] = useState(false);

  const tagliaHandler = () => {
    setTaglia(!taglia);
  };

  return (
    <div className="w-full relative">
      <div className="max-w-[1300px] flex items-center space-x-5 ">
        <div className="flex space-x-2">
          <img src={filter} alt="filter" className="w-5 h-5" />
          <p className="uppercase text-[#e72b6f] text-sm font-semibold">
            Filtri
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FilterButton name={"Taglia"} onClick={tagliaHandler} />

          <FilterButton name={"Prezzo & disponibilita"} />
          <FilterButton name={"Marca"} />
          <FilterButton name={"Genere"} />
          <FilterButton name={"Colore"} />
        </div>
      </div>
      {taglia && <TagliaDropdown />}
    </div>
  );
};

export default FilterComponent;
