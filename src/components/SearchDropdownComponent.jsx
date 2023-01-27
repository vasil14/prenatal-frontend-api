import React, { useContext, useEffect } from "react";
import ProductContext from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import cancel from "../assets/cancel.png";
import SearchComponent from "./SearchComponent";
import Cards from "./cards/Cards";

const SearchDropdownComponent = ({ onClick }) => {
  const { products, getProducts, formValues } = useContext(ProductContext);
  const { name } = useParams();

  useEffect(() => {
    getProducts(formValues?.search);
  }, [formValues]);

  return (
    <div className="absolute top-0 bg-slate-300 w-full text-white z-50">
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
      <div className="flex space-x-3 mt-10">
        <div className="basis-1/5"></div>
        <div className="basis-4-5 relative grid grid-cols-5 gap-6 md:justify-between justify-between ">
          {products?.map((product) => {
            return (
              <div key={product.id}>
                <Cards
                  size="270px"
                  images={product.images}
                  image={product.image_link}
                  id={product.id}
                  price={product.price}
                  vipPrice={product.vip_price}
                  marke={product.marche}
                  title={product.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchDropdownComponent;
