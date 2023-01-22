import React from 'react';
import logo2 from '../assets/logo2.png';
import cancel from '../assets/cancel.png';
import SearchComponent from './SearchComponent';

const SearchDropdownComponent = ({ onClick }) => {
  return (
    <div className="absolute top-0 bg-slate-300 w-full text-white h-96 z-30">
      <div className="flex flex-row px-12 pt-8 justify-between">
        <img
          onClick={onClick}
          src={logo2}
          alt="logo"
          className="w-36 h-11 justify-start hover:cursor-pointer"
        />
        <SearchComponent
          color="border-[#e72b6f]"
          placeholder="Ricerca..."
          paddingX="px-5"
        />
        <img
          onClick={onClick}
          src={cancel}
          alt="cancel"
          className=" w-5 h-5 justify-end hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchDropdownComponent;
