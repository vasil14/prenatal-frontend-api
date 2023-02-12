import React, { useEffect, useContext, useState } from 'react';
import filter from '../../assets/images/filter.png';
import FilterButton from './FilterButton';
import TagliaDropdown from './TagliaDropdown';
import MarcaDropdown from './MarcaDropdown';
import GenereDropdown from './GenereDropdown';
import PrezzoComponent from './PrezzoComponent';
import ColoreDropdown from './ColoreDropdown';
import ProductContext from '../../Context/ProductContext';
import { filters } from '../../constants/index';

const FilterComponent = ({ totalProducts, colors }) => {
  const { showFilterComp, filterCompHandler } = useContext(ProductContext);
  const [getColors, setColors] = useState(['']);

  useEffect(() => {
    const colors = localStorage.getItem('COLORS')?.split(',');
    if (colors) {
      setColors(colors);
    }
  }, []);
  return (
    <div className="container mt-6 mb-5 lg:mt-10 md:mb-0">
      <div className="relative justify-between space-y-4 lg:flex lg:space-y-0">
        {/* Dekstop filter component */}
        <div className="hidden lg:block">
          <div className="flex items-center space-x-5 px-2">
            <div className="flex space-x-2">
              <img src={filter} alt="filter" className="w-5 h-5" />
              <p className="uppercase text-primary text-sm font-semibold">
                Filtri
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {filters.map(({ name, id }) => (
                <FilterButton
                  key={id}
                  name={name}
                  onClick={() => filterCompHandler(id)}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Mobile filters component */}
        <div className="lg:hidden">
          <button className="relative pointer-events-auto lg:hidden focus:outline-none w-full border-2 rounded-full py-2 flex items-center justify-center border-gray-300 text-base text-primary font-medium ">
            <img src={filter} alt="filter" />
            <span className="uppercase ml-2">Filtri</span>
          </button>
        </div>
        <div className="flex items-center justify-center lg:justify-end ">
          <div className="mr-2 flex">
            <span className="whitespace-nowrap font-medium text-primary text-xs md:text-sm">
              {totalProducts}
            </span>
            <span className="whitespace-nowrap font-normal text-pnt-black text-xs md:text-sm ml-1">
              total products
            </span>
          </div>
        </div>
        {showFilterComp === 1 && <TagliaDropdown />}
        {showFilterComp === 2 && <PrezzoComponent />}
        {showFilterComp === 3 && <MarcaDropdown />}
        {showFilterComp === 4 && <GenereDropdown />}
        {showFilterComp === 5 && <ColoreDropdown colors={colors} />}
      </div>
      {/* {localStorage.getItem("COLORS") && (
        <div className="mt-2 flex flex-wrap items-center text-sm space-x-2 text-gray-600">
          <p>Colore: </p>
          <div className="flex flex-row space-x-2">
            {getColors?.map((color, i) => {
              return <FilterButton key={i} name={color} />;
            })}
            <div onClick={() => localStorage.removeItem("COLORS")}>
              <FilterComponent name={"Resseta"} />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default FilterComponent;
