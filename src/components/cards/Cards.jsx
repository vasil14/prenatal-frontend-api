import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const Cards = ({ image, images, price, vipPrice, marke, title, id }) => {
  return (
    <div className="relative w-full max-w-sm bg-white hover:scale-110 duration-200 ease-in-out">
      <Link to={`${id}`}>
        <img src={image} alt="sadfsadf" />
      </Link>
      {/* <div className="absolute top-2 w-[50px] h-[20px] bg-black"></div> */}
      {/* <Carousel className="w-[270px] h-[360px] scroll-none">
        <Link to={`${id}`}>
          <img src={image} alt={image} />
        </Link>

        {images?.map((data, index) => {
          return (
            <Link to={`${id}`}>
              <img key={index} src={data.link} alt={data.link} />
            </Link>
          );
        })}
      </Carousel> */}

      <div className="flex flex-row justify-between px-5 pb-5">
        <div className="text-red-500">€ {price}</div>
        <div className="w-20 mt-3">
          <hr className=" border-solid border-[1px] border-green-500" />
        </div>
        <div>
          <span className="pr-5 text-green-600">€ {vipPrice}</span>
          <span>Vip</span>
        </div>
      </div>

      <div>
        <h3>{marke}</h3>
        <Link to={`${id}`}>
          <span>{title}</span>
        </Link>
      </div>

      {/* <div>
       <span>disponible online</span>

        <button>hello</button>
       </div> */}
    </div>
  );
};

export default Cards;
