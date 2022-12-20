import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";

const ProductIndex = () => {
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="mt-12 ">
      <div className="flex justify-end m-2 p-2">
        <Link
          to="/products/create"
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"
        >
          New Product
        </Link>
      </div>
      {/* <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6">{product.title}</td>
                  <td className="py-4 px-6">{product.colore}</td>
                  <td className="py-4 px-6">$2999</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
      <div className="flex flex-wrap justify-between ">
        {products.map((product, index) => {
          return (
            <div className={`w-[280px] h-[360px] mb-[40px]`} key={index}>
              <img src={product.image_link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductIndex;
