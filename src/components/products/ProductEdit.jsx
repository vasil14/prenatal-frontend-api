import React from "react";
import ProductContext from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BreadcrumbComponent from "../BreadcrumbComponent";
import blank from "../../assets/blank.jpg";

const ProductEdit = () => {
  const { product, getProduct } = useContext(ProductContext);
  let { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, []);
  return (
    <div>
      <div className="mt-4">
        <BreadcrumbComponent product_type={product.product_type} />
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3 grid grid-cols-2 gap-6 mt-6 mr-6">
          <div className="border border-slate-300">
            <img src={product.image_link} className="w-full h-full" />
          </div>
          {product.images?.map((image, index) => {
            return (
              <div key={index} className="border border-slate-300">
                <img src={image.link} className=" h-full " />
              </div>
            );
          })}

          <div>
            {product.images?.length % 2 == 0 && (
              <div className="border border-slate-300">
                <img src={blank} className="w-full h-full" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4 px-3">
          <h1 className="text-[22px] text-[#333333] font-poppins font-[500]">
            {product.title}
          </h1>
          <h1 className="font-poppins text-[35px] text-[#E72A6E] mt-10">
            € {product.price}
          </h1>
          <hr className="flex mx-auto w-full bg-[#789A40] max-w-[400px] h-[2px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
