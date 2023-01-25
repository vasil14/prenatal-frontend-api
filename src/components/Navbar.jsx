import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/prenatal.png";
import location from "../assets/location.png";
import { categories, specialCat } from "../constants/index";
import Account from "./user/Account";
import CategoryDropdown from "./CategoryDropdown";
import Backdrop from "./Backdrop";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import SearchComponent from "./SearchComponent";
import SearchDropdownComponent from "./SearchDropdownComponent";

const Navbar = () => {
  const [categoryIsOpen, setCategoryIdOpen] = useState(false);
  const [getCategories, setCategories] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  function categoryHandler(category) {
    setCategoryIdOpen(!categoryIsOpen);
    setCategories(category);
  }

  const closeCategory = () => {
    setCategoryIdOpen(!categoryIsOpen);
  };
  const handleSearchBar = () => {
    setShowSearchDropdown(true);
  };

  const closeSearchBar = () => {
    setShowSearchDropdown(false);
  };

  return (
    <div className="border-b-2 h-[167px] ">
      <div className=" max-w-[1300px] mx-auto z-50">
        <div className="flex flex-row justify-between items-center pt-8">
          <div className="w-60">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[208px] " />
            </Link>
          </div>
          <SearchComponent
            onClick={handleSearchBar}
            color="border-gray-800"
            placeholder="Che prodotto stai cercando?"
            paddingX="px-16"
          />
          <div className="flex flex-row  w-72">
            <p className="text-[9px] text-right ">
              PRENOTA & RITIRA <br /> IN NEGOZIO
            </p>
            <div className="flex flex-row h-[25px]">
              <img src={location} alt="icons" className="ml-4 " />
              <div className="ml-4">
                <Account />
              </div>
              <div className="ml-4">
                <ShoppingCart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between max-w-[1300px] mx-auto mt-10">
          <div className="flex flex-row  ">
            {categories.map((category, index) => {
              return (
                <div
                  onClick={() => categoryHandler(category)}
                  className={`${
                    index === categories.length - 1 ? "mr-0" : "mr-5"
                  } cursor-pointer`}
                  key={index}
                >
                  {!categoryIsOpen && category}

                  {categoryIsOpen && (
                    <Link
                      to={`products/${category.toLowerCase()}`}
                      onClick={closeCategory}
                    >
                      {category}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-row  ">
            {specialCat.map((special, index) => {
              return (
                <div
                  className={`${
                    index === specialCat.length - 1 ? "mr-0" : "mr-5"
                  }`}
                  key={index}
                >
                  {special}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {categoryIsOpen && <CategoryDropdown categoryName={getCategories} />}
      {categoryIsOpen && <Backdrop onClick={closeCategory} />}

      {showSearchDropdown && (
        <SearchDropdownComponent onClick={closeSearchBar} />
      )}
      {showSearchDropdown && <Backdrop onClick={closeSearchBar} />}
    </div>
  );
};

export default Navbar;
