import React, { useEffect, useState, useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";

const CategoryDropdown = ({ categoryName }) => {
  const { categoryChildren, getCategoriesWithChildren } =
    useContext(ProductContext);

  useEffect(() => {
    getCategoriesWithChildren(categoryName);
  }, [categoryName]);
  console.log(categoryChildren[0]?.children);

  return (
    <div className="relative z-30">
      <div className="absolute bg-white w-full text-white ">
        <div className="max-w-[1300px] mx-auto my-6 text-black">
          <div className="flex flex-row">
            {categoryChildren[0]?.children?.map((sub_1, i) => (
              <div key={i} className="mr-20 mb-[20px] pt-5 ">
                <Link
                  to={
                    "/products/" +
                    categoryName +
                    "/" +
                    sub_1.name.replaceAll(" ", "-").toLowerCase()
                  }
                >
                  <h1 className="font-bold text-[16px] mb-[20px]">
                    {sub_1.name.toUpperCase()}
                  </h1>
                </Link>
                <div className="space-y-3.5">
                  {sub_1?.children?.map((sub_2, i) => (
                    <div className="space-y-3.5">
                      <h3 key={i} className="font-light text-[14px]">
                        {sub_2.name}
                      </h3>
                      {sub_2.children?.map((sub_3, i) => (
                        <div className="space-y-3.5">
                          <h3 key={i} className="font-light text-[14px] pl-2">
                            {sub_3.name}
                          </h3>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
