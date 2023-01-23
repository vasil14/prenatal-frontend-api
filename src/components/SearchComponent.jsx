import React, { useContext, useEffect } from "react";
import searchIcon from "../assets/search_icon.png";
import ProductContext from "../Context/ProductContext";

const SearchComponent = ({ onClick, color, paddingX, placeholder }) => {
  const { onChange, formValues } = useContext(ProductContext);
  return (
    <div className={`w-full ${paddingX}`} onClick={onClick}>
      <div
        className={`flex items-center justify-between border-b ${color} py-1`}
      >
        <input
          name="search"
          value={formValues["search"]}
          className="bg-transparent border-none text-base py-1 px-2 w-full"
          placeholder={placeholder}
          onChange={onChange}
        />

        <img src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default SearchComponent;
