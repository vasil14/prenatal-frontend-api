import { useState } from 'react';
//Icons
import cart from '../../assets/images/cart.png';
//Components
import BadgeComponent from './BadgeComponent';
import CartDropdown from './CartDropdown';

const ShoppingCart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartHandler = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <div className="relative items-center w-[26px] ">
      <BadgeComponent
        img={<img src={cart} alt="cart" />}
        onClick={cartHandler}
      />
      {cartOpen && <CartDropdown />}
    </div>
  );
};

export default ShoppingCart;
