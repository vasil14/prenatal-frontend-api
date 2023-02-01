import React, { useState } from "react";

import cart from "../../assets/cart.png";
import BadgeComponent from "./BadgeComponent";
import CartDropdown from "./CartDropdown";

function ShoppingCart() {
  const [cartOpen, setCartOpen] = useState(false);
  function cartHandler() {
    setCartOpen(!cartOpen);
  }
  return (
    <div className="relative items-center w-[26px] ">
      <BadgeComponent
        img={<img src={cart} alt="cart" />}
        onClick={cartHandler}
      />
      {cartOpen && <CartDropdown />}
    </div>
  );
}

export default ShoppingCart;
