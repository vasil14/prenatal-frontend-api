import React from 'react';
import image from '../../assets/9445d334-xz_701143-860x1147.jpg';

const Cards = ({ image, price, vipPrice, marke, title }) => {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
      <div className="mb-10">
        {image}
        {/* <img src={image} alt="product image" /> */}
      </div>

      <div class="flex flex-row justify-between px-5 pb-5">
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
        <span>{title}</span>
      </div>
      {/* 
      <div>
        <span>disponible online</span>

        <button>hello</button>
      </div> */}
    </div>
  );
};

export default Cards;
