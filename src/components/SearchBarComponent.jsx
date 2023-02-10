import React, { useContext } from "react";
import searchIcon from "../assets/search_icon.png";
import ProductContext from "../Context/ProductContext";

const SearchBarComponent = ({ onClick }) => {
  const { onChange, formValues } = useContext(ProductContext);
  return (
    <div className={`w-full px-5`} onClick={onClick}>
      <div
        className={`flex items-center justify-between border-b border-primary py-1 text-black `}
      >
        <img src={searchIcon} alt="searchIcon" />
        <input
          name="search"
          value={formValues["search"]}
          className="bg-transparent border-none text-base py-1 px-2 w-full "
          placeholder="Ricerca..."
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
