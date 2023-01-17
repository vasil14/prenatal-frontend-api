import React, { useState } from "react";
import item from "../../assets/item.jpg";
import Trash from "../../assets/trash.svg";
import IncDecCounter from "./IncDecCounter";
import cart from "../../assets/cart.png";
import BadgeComponent from "./BadgeComponent";

function ShoppingCart() {
  const [cartOpen, setCartOpen] = useState(false);
  function cartHandler() {
    setCartOpen(!cartOpen);
  }
  return (
    <div className="relative items-center">
      {/* <img src={cart} alt="cart" onClick={cartHandler} /> */}
      <BadgeComponent
        img={<img src={cart} alt="cart" />}
        onClick={cartHandler}
      />
      {cartOpen && (
        <div className="absolute right-0 top-9 w-[310px] z-30 drop-shadow-[0px_0px_20px_rgba(0,0,0,0.15)] bg-white">
          <div className="p-4 border-b border-gray-100">
            <p className="text-base font-bold text-[#e72b6f]">
              Il tuo carello (1)
            </p>
          </div>
          <div className="flex flex-nowrap justify-between items-center px-4 py-3.5 space-x-1 ">
            <div className="w-14 flex-shrink-0 px-2">
              <img src={item} alt="item" />
            </div>
            <div className="flex-1">
              <p className="block text-sm font-light text-black uppercase">
                Bongaboo
              </p>
              <p className="block text-sm font-light text-black leading-4 mb-2">
                Bugaboo sacco a pelo pine green
              </p>
              <div className="flex items-center space-x-2 pr-1">
                <IncDecCounter className="inline-flex -mr-2" />
                <img
                  src={Trash}
                  alt=""
                  className="p-2 text-gray-600 hover:text-red-500 w-8"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-end ">
                <p className="text-sm font-medium whitespace-nowrap text-[#e72b6f]">
                  € 139,90
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 space-y-4 border-t border-gray-100">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-normal">Spedizone :</p>
                <p className="text-sm font-medium flex-shrink-0 ml-2 uppercase text-[#e72b6f]">
                  GRATIS
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="uppercase text-sm font-normal flex">Totale :</p>
                <p className="text-lg font-medium flex-shrink-0 ml-2 text-[#e72b6f]">
                  € 139,90
                </p>
              </div>
            </div>
            <button className="w-full flex uppercase justify-center items-center text-center rounded-full px-5 border focus:outline-none hover:bg-white hover:border-[#e72b6f] hover:text-[#e72b6f] text-base py-2 text-white bg-[#e72b6f] ">
              {" "}
              CONCLUDI l'ORDINE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
