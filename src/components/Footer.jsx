import React from "react";
import { categories, tuEPrenatal, azienda, supporto } from "../constants";

const Footer = () => {
  return (
    <div className="border-y mt-24">
      <div className="flex flex-wrap justify-between items-start py-10  border-y mx-auto">
        <div className=" px-4 w-1/4 ">
          <div className="font-semibold uppercase text-sm">
            <p>Categorie</p>
          </div>
          <div className="mt-3">
            {categories.map((category, i) => (
              <div
                key={i}
                className="uppercase text-gray-600 leading-6 text-xs hover:underline hover:decoration-[#E72A6E] hover:underline-offset-2 "
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-4 w-1/4">
          <div className="font-semibold uppercase text-sm">
            <p>Tue e prenatal</p>
          </div>
          <div className="mt-3">
            {tuEPrenatal.map((category, i) => (
              <div
                key={i}
                className="uppercase text-gray-600 leading-6 text-xs hover:underline hover:decoration-[#E72A6E] hover:underline-offset-2 "
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-4 w-1/4">
          <div className="font-semibold uppercase text-sm">
            <p>azienda</p>
          </div>
          <div className="mt-3">
            {azienda.map((category, i) => (
              <div
                key={i}
                className="uppercase text-gray-600 leading-6 text-xs hover:underline hover:decoration-[#E72A6E] hover:underline-offset-2 "
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-4 w-1/4">
          <div className="font-semibold uppercase text-sm">
            <p>supporto</p>
          </div>
          <div className="mt-3">
            {supporto.map((category, i) => (
              <div
                key={i}
                className="uppercase text-gray-600 leading-6 text-xs hover:underline hover:decoration-[#E72A6E] hover:underline-offset-2 "
              >
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
