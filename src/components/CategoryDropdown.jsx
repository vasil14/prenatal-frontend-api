import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const CategoryDropdown = ({ children }) => {
  // console.log(children);
  const [getCategories, setCategories] = useState([]);

  useEffect(() => {
    if (children) {
      axiosClient
        .get("/categories/" + children)
        .then(({ data }) => {
          const res = data[0].children;
          // console.log(data[0]);
          return setCategories(res);
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  }, [children]);

  return (
    <div className="relative">
      <div className="absolute top-7 bg-black w-full text-white ">
        <div className="max-w-[1300px] mx-auto my-6 text-white">
          {getCategories.map((data) => {
            console.log(data.name);

            <h1>{data.name}</h1>;

            // {
            //   data.children.map((x) => {
            //     // console.log(data);
            //     <h1 key={x.id}>{x.name}</h1>;
            //     {
            //       x.children.map((y) => {
            //         // console.log(data);
            //         <h1 key={y.id}>{y.name}</h1>;
            //       });
            //     }
            //   });
            // }
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
