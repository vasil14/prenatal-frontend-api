import React from 'react';
import searchIcon from '../assets/search_icon.png';

const SearchComponent = ({ onClick, color, paddingX, placeholder }) => {
  return (
    <div className={`w-full ${paddingX}`} onClick={onClick}>
      <div
        className={`flex items-center justify-between border-b ${color} py-1`}
      >
        <input
          type="text"
          name="search"
          className="bg-transparent border-none text-base py-1 px-2 w-full"
          placeholder={placeholder}
        />

        <img src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default SearchComponent;
