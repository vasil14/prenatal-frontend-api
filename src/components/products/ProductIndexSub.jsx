import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import BreadcrumbComponent from '../BreadcrumbComponent';
import Cards from '../cards/Cards';
import { Pagination } from 'antd';
import FilterComponent from '../Filters/FilterComponent';

const ProductIndexSub = () => {
  const { getSubCatProducts, subCatProducts } = useContext(ProductContext);
  let { categoryName, subCat } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getSubCatProducts(subCat, currentPage);
  }, [subCat]);

  console.log(subCat);
  console.log(subCatProducts);
  return (
    <div>
      <div className=" mx-auto">
        <div className="py-6">
          <BreadcrumbComponent
            product_type={location.pathname.replace('/products/', '')}
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
        <div className="flex flex-wrap md:justify-between justify-between pt-12">
          {subCatProducts?.data?.map((product, index) => {
            return (
              <div key={index} className="w-[270px] mb-10">
                <Cards
                  images={product.images}
                  image={product.image_link}
                  id={product.id}
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

export default ProductIndexSub;
