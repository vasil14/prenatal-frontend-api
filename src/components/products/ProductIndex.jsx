import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import BreadcrumbComponent from "../BreadcrumbComponent";
import Cards from "../cards/Cards";

const ProductIndex = () => {
  const { productsCategory, getProductsCategory } = useContext(ProductContext);
  let { categoryName } = useParams();
  useEffect(() => {
    getProductsCategory(categoryName);
  }, [categoryName]);
  console.log(productsCategory[0]);
  return (
    <div className="mt-12 mx-auto">
      <BreadcrumbComponent product_type={productsCategory[0]?.product_type} />
      <div className="flex flex-wrap md:justify-between justify-around items-center ">
        {productsCategory?.map((product, index) => {
          return (
            <div key={index} className="w-[270px] ">
              <Cards
                image={
                  <Link key={index} to={`${product.id}`}>
                    <img src={product.image_link} />
                  </Link>
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
