import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/prenatal.png";
import icons from "../assets/nav_icons.png";
import searchIcon from "../assets/search_icon.png";
import { categories, specialCat } from "../constants/index";

const Navbar = () => {
  return (
    <div className="border-b-2 h-[167px] ">
      <div className="flex flex-row justify-between max-w-[1300px] mx-auto">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="  mt-6 left w-[208px] h-[40px]"
          />
        </Link>
        <div className="basis-1/2 relative center mt-4 rounded-lg">
          <div className="absolute top-4 left-3">
            <p>Che prodotto stai cercando?</p>
          </div>
          <input
            type="text"
            name="search"
            className="h-14 w-full bg-transparent pl-10 pr-20  focus:outline-none underline "
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
          <img src={icons} alt="icons" className="ml-2 w-[121px] h-[26px]" />
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-[1300px] mx-auto mt-10">
        <div className="flex flex-row  ">
          {categories.map((category, index) => {
            return (
              <div
                className={`${
                  index == categories.length - 1 ? "mr-0" : "mr-5"
                }`}
                key={index}
              >
                {category}
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
  );
};

export default Navbar;
