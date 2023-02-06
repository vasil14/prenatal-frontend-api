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
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const colore = searchParams.get("colore");

  console.log(productsCategory);

  useEffect(() => {
    if (subCat_3) {
      getProductsCategory(subCat_3, currentPage, colore);
      window.scrollTo({ top: 0 });
    } else if (subCat_2) {
      getProductsCategory(subCat_2, currentPage, colore);
      window.scrollTo({ top: 0 });
    } else if (subCat_1) {
      getProductsCategory(subCat_1, currentPage, colore);
      window.scrollTo({ top: 0 });
    } else {
      getProductsCategory(categoryName, currentPage, colore);
      window.scrollTo({ top: 0 });
    }
  }, [subCat_3, subCat_2, subCat_1, categoryName, currentPage, colore]);

  return (
    <div className="mx-auto container">
      <div className="py-6 px-5 ">
        <BreadcrumbComponent
          product_type={location.pathname.replace("/products/", "")}
        />
      </div>
      <div className="px-5">
        <h1 className="block text-2xl font-bold text-gray-800 uppercase ">
          {categoryName}
        </h1>
      </div>
      <div className="container mt-6 mb-5">
        <FilterComponent totalProducts={productsCategory?.total} />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-12 ">
          {productsCategory?.data?.map((product, index) => {
            return (
              <div
                key={index}
                className="mb-10 p-2 w-1/2 xs:w-1/2 lg:w-1/3 xl:w-1/4 "
              >
                <Cards
                  images={product.images}
                  image={product.image_link}
                  id={product.id}
                  price={
                    product?.children[0]?.price
                      ? product?.children[0]?.price
                      : product?.price
                  }
                  vipPrice={
                    product?.children[0]?.vip_price
                      ? product?.children[0]?.vip_price
                      : product?.vip_price
                  }
                  marke={product.marche}
                  title={product.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={productsCategory.total}
          size="small"
          showSizeChanger={false}
          onChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default ProductIndex;
