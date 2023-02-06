import React, { useContext, useEffect } from 'react';
import ProductContext from '../Context/ProductContext';
import logo2 from '../assets/logo2.png';
import close from '../assets/cancel.png';
import SearchComponent from './SearchBarComponent';
import SearchCard from './SearchCard';

const SearchDropdownComponent = ({ onClick }) => {
  const { products, getProducts, formValues } = useContext(ProductContext);

  useEffect(() => {
    if (formValues?.search.length) {
      getProducts(formValues?.search);
    }
  }, [formValues]);

  console.log(products);

  return (
    <div className="absolute top-0 bg-white w-full drop-shadow-xl">
      <div className="flex flex-row px-12 pt-8 justify-between">
        <img
          onClick={onClick}
          src={logo2}
          alt="logo"
          className="w-36 h-11 justify-start hover:cursor-pointer"
        />
        <SearchComponent />
        <img
          onClick={onClick}
          src={close}
          alt="close"
          className="mt-3 w-5 h-5 justify-end hover:cursor-pointer focus:border-none"
        />
      </div>
      <div className="flex space-x-3 mt-10">
        <div className="basis-1/5"></div>
        <div className="basis-4-5 relative grid grid-cols-5 gap-6 md:justify-between justify-between ">
          {products?.map((product) => {
            return (
              <div key={product.id}>
                <SearchCard
                  image={product.image_link}
                  id={product.id}
                  price={
                    product?.children[0]
                      ? product?.children[0]?.price
                      : product?.price
                  }
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
