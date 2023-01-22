import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import BreadcrumbComponent from '../BreadcrumbComponent';
import Cards from '../cards/Cards';
import { Pagination } from 'antd';

const ProductIndex = () => {
  const { productsCategory, getProductsCategory } = useContext(ProductContext);
  let { categoryName } = useParams();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProductsCategory(categoryName, currentPage);
    setProducts(productsCategory);
  }, [categoryName, currentPage]);
  console.log(currentPage);
  return (
    <div>
      <div className="mt-12 mx-auto">
        <BreadcrumbComponent product_type={productsCategory[0]?.product_type} />
        <div className="flex flex-wrap md:justify-between justify-between ">
          {productsCategory?.data?.map((product, index) => {
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

export default ProductIndex;
