import React from 'react';
import ProductContext from '../../Context/ProductContext';
import { useContext, useEffect } from 'react';
import BreadcrumbComponent from '../BreadcrumbComponent';
import blank from '../../assets/blank.jpg';
import SizeComponent from '../SizeComponent';
import AccordionComponent from '../AccordionComponent';
import logo_sm from '../../assets/logo-small.jpg';

const ProductView = () => {
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    const id = localStorage.getItem('PRODUCT_ID');
    if (id) {
      getProduct(id);
      window.scrollTo({ top: 0 });
    }
  }, [localStorage.getItem('PRODUCT_ID')]);

  return (
    <div>
      <div className="mt-4">
        <BreadcrumbComponent
          product_type={product[0]?.product_type?.replaceAll(' > ', '/')}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row container mx-auto">
          <div className="basis-2/3 grid grid-cols-2 gap-6 mt-6 mr-6">
            <div className="border block border-gray-300 ">
              <img
                src={product[0]?.image_link}
                className="w-full h-full object-cover"
              />
            </div>
            {product[0]?.images?.map((image, index) => {
              return (
                <div key={index} className="border border-gray-300">
                  <img
                    src={image.link}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
            <div>
              {product[0]?.images?.length % 2 == 0 && (
                <div className="border border-gray-300 min-h-full">
                  <img src={blank} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
          <div className="self-start w-full lg:sticky lg:top-0 lg:pt-5 lg:max-w-sm px-3 ">
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
                    €{' '}
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
                      {' '}
                      Con Vip Card
                    </span>
                  </div>
                </div>
              )}
            </div>
            {product[0]?.children ? (
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
              <div className="my-10 space-y-6">
                <div className="flex justify-between">
                  <p>Taglie</p>
                  <a href="#" className="underline-offset-2 underline">
                    Guida alle taglie
                  </a>
                </div>
                <SizeComponent children={product[0]?.taglia} />
              </div>
            )}

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
    </div>
  );
};

export default ProductView;
