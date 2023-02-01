import React, { useEffect, useState, useContext } from "react";
import ProductContext from "../Context/ProductContext";
import { Link } from "react-router-dom";

const CategoryDropdown = ({ categoryName }) => {
  const { categoryChildren, getCategoriesWithChildren, closeCategory } =
    useContext(ProductContext);

  useEffect(() => {
    getCategoriesWithChildren(categoryName);
  }, [categoryName]);

  return (
    <div className="relative  drop-shadow-xl z-40">
      <div className="absolute bg-white w-full text-white ">
        <div className="max-w-[1300px] mx-auto my-6 text-black">
          <div className="flex flex-row">
            {categoryChildren[0]?.children?.map((sub_1, i) => (
              <div key={sub_1.id} className="mr-20 mb-[20px] pt-5 ">
                <Link
                  to={
                    "/products/" +
                    categoryName.replaceAll(" ", "-").toLowerCase() +
                    "/" +
                    sub_1.name.replaceAll(" ", "-").toLowerCase()
                  }
                >
                  <h1
                    className="font-bold text-[16px] mb-[20px]"
                    onClick={closeCategory}
                  >
                    {sub_1.name.toUpperCase()}
                  </h1>
                </Link>
                <div className="space-y-3.5">
                  {sub_1?.children?.map((sub_2, i) => (
                    <div key={i} className="space-y-3.5">
                      <Link
                        to={
                          "/products/" +
                          categoryName.toLowerCase() +
                          "/" +
                          sub_1.name.replaceAll(" ", "-").toLowerCase() +
                          "/" +
                          sub_2.name.replaceAll(" ", "-").toLowerCase()
                        }
                      >
                        <h3
                          className="font-light text-[14px]"
                          onClick={closeCategory}
                        >
                          {sub_2.name}
                        </h3>
                      </Link>
                      {sub_2.children?.map((sub_3, i) => (
                        <div key={i} className="space-y-3.5">
                          <Link
                            to={`/products/${categoryName.toLowerCase()}/${sub_1.name
                              .replaceAll(" ", "-")
                              .toLowerCase()}/${sub_2.name
                              .replaceAll(" ", "-")
                              .toLowerCase()}/${sub_3.name
                              .replaceAll(" ", "-")
                              .toLowerCase()}`}
                          >
                            <h3
                              className="font-light text-[14px] pl-2"
                              onClick={closeCategory}
                            >
                              {sub_3.name}
                            </h3>
                          </Link>
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
