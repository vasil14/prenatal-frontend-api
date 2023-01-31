import React, { useEffect, useContext, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";
import BreadcrumbComponent from "../BreadcrumbComponent";
import Cards from "../cards/Cards";
import { Pagination } from "antd";
import FilterComponent from "../Filters/FilterComponent";

const ProductIndex = () => {
  const { productsCategory, getProductsCategory } = useContext(ProductContext);
  let { categoryName, subCat_1, subCat_2, subCat_3 } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const colore = searchParams.get("colore");

  if (subCat_3) {
    useEffect(() => {
      getProductsCategory(subCat_3, currentPage, colore);
    }, [subCat_3, currentPage, colore]);
  } else if (subCat_2) {
    useEffect(() => {
      getProductsCategory(subCat_2, currentPage, colore);
    }, [subCat_2, currentPage, colore]);
  } else if (subCat_1) {
    useEffect(() => {
      getProductsCategory(subCat_1, currentPage, colore);
    }, [subCat_1, currentPage, colore]);
  } else {
    useEffect(() => {
      getProductsCategory(categoryName, currentPage, colore);
    }, [categoryName, currentPage, colore]);
  }

  return (
    <div>
      <div className="mx-auto">
        <div className="py-6">
          <BreadcrumbComponent
            product_type={location.pathname.replace("/products/", "")}
          />
        </div>
        <div>
          <h1 className="block text-2xl font-bold text-gray-800 uppercase ">
            {categoryName}
          </h1>
        </div>
        <div className="mt-10">
          <FilterComponent />
        </div>
        <div className="flex flex-wrap pt-12">
          {productsCategory?.data?.map((product, index) => {
            return (
              <div key={index} className="mb-10 p-2 ">
                <Cards
                  images={product.images}
                  image={product.image_link}
                  id={product.id}
                  price={product.children[0]?.price}
                  vipPrice={product.children[0]?.vip_price}
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
        <div className="flex justify-center">
          <Pagination
            current={currentPage}
            total={productsCategory.total}
            defaultPageSize={12}
            size="small"
            onChange={(page, pageSize) => {
              setCurrentPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductIndex;
