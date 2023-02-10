import React from "react";
import SizeComponent from "../components/SizeComponent";
import AccordionComponent from "../components/AccordionComponent";
import logo_sm from "../assets/logo-small.jpg";

const ProductDetailsComponent = ({ product }) => {
  return (
    <div className="self-start w-full lg:sticky lg:top-0 lg:pt-5 lg:max-w-sm px-3 mt-10 lg:mt-0">
      <div className="relative flex min-h-8">
        <img src={logo_sm} alt="logo_sm" className="h-8" />
      </div>

      <h1 className="font-normal font-poppins text-pnt-black text-2xl">
        {product[0]?.title}
      </h1>
      <div className="mt-8 mb-8 lg:mb-0">
        <div className="flex flex-col pb-4 border-b ">
          <div className="flex gap-2 md:gap-4 mt-1  ">
            <span className="text-primary font-poppins font-normal text-3xl md:text-4xl leading-none">
              €{" "}
              {product[0]?.children[0]
                ? product[0]?.children[0]?.price
                : product[0]?.price}
            </span>
          </div>
        </div>
        {product[0]?.children[0]?.vip_price && (
          <div className="flex py-4 gap-2 md:gap-4 bg-white border-t border-secondary">
            <div className="text-center flex items-center bg-secondary text-white">
              <span className="font-bold text-base px-4">-30%</span>
            </div>
            <div className="flex items-center">
              <span className="font-poppins font-medium text-3xl md:text-4xl text-secondary mr-2 leading-none flex-shrink-0">
                € {product[0]?.children[0]?.vip_price}
              </span>
              <span className="uppercase text-secondary text-xs ">
                {" "}
                Con Vip Card
              </span>
            </div>
          </div>
        )}
      </div>
      {product[0]?.children?.length ? (
        <div className="my-10 space-y-6">
          <div className="flex justify-between">
            <p>Taglie</p>
            <a href="#" className="underline-offset-2 underline">
              Guida alle taglie
            </a>
          </div>
          <SizeComponent children={product[0]?.children} />
        </div>
      ) : (
        product[0]?.taglia.length > 0 && (
          <div className="my-10 space-y-6">
            <div className="flex justify-between">
              <p>Taglie</p>
              <a href="#" className="underline-offset-2 underline">
                Guida alle taglie
              </a>
            </div>
            <SizeComponent children={product[0]?.taglia} />
          </div>
        )
      )}

      <button
        type="button"
        className="uppercase w-full bg-[#E72A6E] text-white rounded-full px-5 py-2 mt-10 font-medium hover:bg-white hover:text-[#E72A6E] border border-[#E72A6E] delay-150 ease-in-out duration-150"
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
        <AccordionComponent product={product} />
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
