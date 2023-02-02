import React, { useState, useContext } from "react";
import filter from "../../assets/filter.png";
import FilterButton from "./FilterButton";
import TagliaDropdown from "./TagliaDropdown";
import MarcaDropdown from "./MarcaDropdown";
import GenereDropdown from "./GenereDropdown";
import PrezzoComponent from "./PrezzoComponent";
import ColoreDropdown from "./ColoreDropdown";
import ProductContext from "../../Context/ProductContext";
import { useSearchParams } from "react-router-dom";

const FilterComponent = () => {
  const { showFilterComp, filterCompHandler } = useContext(ProductContext);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("colore"));

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
          <FilterButton name={"Taglia"} onClick={() => filterCompHandler(1)} />
          <FilterButton
            name={"Prezzo & disponibilita"}
            onClick={() => filterCompHandler(2)}
          />
          <FilterButton name={"Marca"} onClick={() => filterCompHandler(3)} />
          <FilterButton name={"Genere"} onClick={() => filterCompHandler(4)} />
          <FilterButton name={"Colore"} onClick={() => filterCompHandler(5)} />
        </div>
        hgdhgf
      </div>
      {showFilterComp === 1 && <TagliaDropdown />}
      {showFilterComp === 2 && <PrezzoComponent />}
      {showFilterComp === 3 && <MarcaDropdown />}
      {showFilterComp === 4 && <GenereDropdown />}
      {showFilterComp === 5 && <ColoreDropdown />}
    </div>
  );
};

export default FilterComponent;
