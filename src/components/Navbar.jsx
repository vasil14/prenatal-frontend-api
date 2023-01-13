import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import logo from "../assets/prenatal.png";
import cart from "../assets/cart.png";
import location from "../assets/location.png";
import searchIcon from "../assets/search_icon.png";
import { categories, specialCat } from "../constants/index";
import Account from "./user/Account";
import CategoryDropdown from "./CategoryDropdown";
import Backdrop from "./Backdrop";

const Navbar = () => {
  const [categoryIsOpen, setCategoryIdOpen] = useState(false);
  const [getCategories, setCategories] = useState([]);

  function categoryHandler(category) {
    setCategoryIdOpen(!categoryIsOpen);
    setCategories(category);
  }

  const closeCategory = (e) => {
    // console.log(e.target.a, "here");
    setCategoryIdOpen(!categoryIsOpen);
  };

  return (
    <div className="border-b-2 h-[167px] ">
      <div className="">
        <div className="flex flex-row justify-between max-w-[1300px] mx-auto">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="  mt-6 left w-[208px] h-[40px]"
            />
          </Link>
          <div className="basis-1/2 relative center mt-4 border-0">
            <div className="absolute top-4 left-3">
              {/* <p>Che prodotto stai cercando?</p> */}
            </div>
            <input
              type="text"
              name="search"
              className="h-14 w-full bg-transparent border-0 "
              placeholder="Che prodotto stai cercando?"
            />
            <hr className="mx-auto max-w-95 h-[2px] bg-slate-400 rounded border-0 top-3"></hr>
            <div className="absolute top-4 right-4">
              <img src={searchIcon} alt="searchIcon" />
            </div>
          </div>
          <div className="right flex flex-row mt-8">
            <p className="text-[9px] text-right ">
              PRENOTA & RITIRA <br /> IN NEGOZIO
            </p>
            <div className="flex flex-row h-[25px]">
              <img src={location} alt="icons" className="ml-4 " />
              <div className="ml-4 ">
                <Account />
              </div>
              <img src={cart} alt="icons" className="ml-4 " />
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
                    index == categories.length - 1 ? "mr-0" : "mr-5"
                  } cursor-pointer`}
                  key={index}
                >
                  {!categoryIsOpen && category}

                  {categoryIsOpen && (
                    <div onClick={closeCategory}>
                      <Link to={`products/${category}`}>{category}</Link>
                    </div>
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
                    index == categories.length - 1 ? "mr-0" : "mr-5"
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

      {categoryIsOpen && <CategoryDropdown children={getCategories} />}
      {categoryIsOpen && <Backdrop onClick={closeCategory} />}
    </div>
  );
};

export default Navbar;
