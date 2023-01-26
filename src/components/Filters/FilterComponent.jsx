import React, { useState } from "react";
import filter from "../../assets/filter.png";
import FilterDropdown from "./FilterDropdown";

import FilterButton from "./FilterButton";
import TagliaDropdown from "./TagliaDropdown";
import MarcaDropdown from "./MarcaDropdown";

const FilterComponent = () => {
  const [taglia, setTaglia] = useState(0);

  const tagliaHandler = (value) => {
    value == taglia ? setTaglia(0) : setTaglia(value);
  };
  // const config = [
  //   { key: 'taglia', label: 'talia', component: TagliaDropdown },
  //   { key: 'Marca', label: 'Marca', component: TagliaDropdown },
  // ];
  // config.map((key) => {
  //   const Component = key.component;
  //   console.log(Component, 'Component');
  //   return (
  //     <Component style={{ display: current === key.key ? 'block' : 'none' }} />
  //   );
  // });
  return (
    <div className="w-full relative">
      <div className="max-w-[1260px] flex items-center space-x-5 ">
        <div className="flex space-x-2">
          <img src={filter} alt="filter" className="w-5 h-5" />
          <p className="uppercase text-[#e72b6f] text-sm font-semibold">
            Filtri
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <FilterButton name={"Taglia"} onClick={() => tagliaHandler(1)} />
          <FilterButton
            name={"Prezzo & disponibilita"}
            onClick={() => tagliaHandler(2)}
          />
          <FilterButton name={"Marca"} onClick={() => tagliaHandler(3)} />
          <FilterButton name={"Genere"} onClick={() => tagliaHandler(4)} />
          <FilterButton name={"Colore"} onClick={() => tagliaHandler(5)} />
        </div>
      </div>
      {taglia === 1 && <TagliaDropdown />}
      {taglia === 3 && <MarcaDropdown />}
    </div>
  );
};

export default FilterComponent;
