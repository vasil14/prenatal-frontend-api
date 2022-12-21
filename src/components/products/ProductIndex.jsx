import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import Cards from "../cards/Cards";

const ProductIndex = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="mt-12 flex justify-between">
      <div className=" grid xl:grid-cols-4 xl:gap-1 md:grid-cols-3 grid-cols-2 mx-auto  ">
        {products.map((product, index) => {
          return (
            <div key={index} className="w-[300px] ">
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
