import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import Cards from '../cards/Cards';

const ProductIndex = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="mt-12 ">
      <div className="flex justify-end m-2 p-2">
        <Link
          to="/products/create"
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New Product
        </Link>
      </div>

      <div className="grid grid-cols-4 justify-between ">
        {products.map((product, index) => {
          return (
            <div className="w-[300px] ">
              <Cards
                image={
                  <a href={product.link}>
                    <img src={product.image_link} />
                  </a>
                }
                price={product.price}
                vipPrice={product.vip_price}
                marke={product.marche}
                title={product.title}
              />
            </div>
            // <div className={`w-[280px] h-[360px] mb-[40px]`} key={index}>
            //   <img src={product.image_link} />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductIndex;
