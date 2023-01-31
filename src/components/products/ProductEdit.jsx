import React from "react";
import ProductContext from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BreadcrumbComponent from "../BreadcrumbComponent";
import blank from "../../assets/blank.jpg";
import SizeComponent from "../SizeComponent";
import AccordionComponent from "../AccordionComponent";

const ProductEdit = () => {
  const { product, getProduct, getId } = useContext(ProductContext);
  console.log(getId);

  useEffect(() => {
    getProduct(getId);
  }, []);

  return (
    <div>
      <div className="mt-4">
        <BreadcrumbComponent
          product_type={product[0]?.product_type?.replaceAll(" > ", "/")}
        />
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3 grid grid-cols-2 gap-6 mt-6 mr-6">
          <div className="border border-slate-300">
            <img src={product[0]?.image_link} className="w-full h-full" />
          </div>
          {product[0]?.images?.map((image, index) => {
            return (
              <div key={index} className="border border-slate-300">
                <img src={image.link} className=" h-full " />
              </div>
            );
          })}

          <div>
            {product[0]?.images?.length % 2 == 0 && (
              <div className="border border-slate-300">
                <img src={blank} className="w-full h-full" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4 px-3 w-[385px]">
          <h1 className="text-[22px] text-[#333333] font-poppins font-[500]">
            {product[0]?.title}
          </h1>

          <h1 className="font-poppins text-[35px] text-[#E72A6E] mt-10">
            € {product[1]?.price}
          </h1>

          {product[1]?.vip_price != 0 && (
            <div>
              <hr className="flex mx-auto w-full bg-[#789A40] max-w-[400px] h-[2px]" />
              <h1 className="font-poppins text-[35px] text-[#789A40] mt-10">
                € {product[1]?.vip_price}
              </h1>
            </div>
          )}
          <div className="my-10 space-y-6">
            <div className="flex justify-between">
              <p>Taglie</p>
              <a href="#" className="underline-offset-2 underline">
                Guida alle taglie
              </a>
            </div>
            <SizeComponent size={product[0]?.taglia} />
          </div>
          <button
            type="button"
            className="uppercase w-full bg-[#E72A6E] text-white rounded-full px-5 py-2 mt-6 font-medium hover:bg-white hover:text-[#E72A6E] border border-[#E72A6E] delay-150 ease-in-out duration-150"
          >
            Aggiungi al carello
          </button>
          <button
            type="button"
            className="uppercase w-full bg-white text-black rounded-full px-5 py-2 mt-6 font-medium hover:text-[#E72A6E] border border-white hover:border-[#E72A6E] delay-150 ease-in-out duration-150"
          >
            Aggiungi alla lista
          </button>
          <div className="text-xs text-black font-normal space-y-2 mt-6">
            <p>{product[0]?.description}</p>
          </div>
          <div className="mt-5">
            <AccordionComponent data={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
