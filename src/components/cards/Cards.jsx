import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const Cards = ({ image, images, price, vipPrice, marke, title, id, size }) => {
  SwiperCore.use([Navigation]);
  const [showCarusel, setShowCarusel] = useState(false);
  const handleMouseEnter = () => {
    setShowCarusel(true);
  };
  const handleMouseLeave = () => {
    setShowCarusel(false);
  };
  return (
    <div
      className={`relative  max-w-sm w-[${size}] bg-white hover:scale-105 hover:drop-shadow-2xl duration-300 ease-in-out align-center z-10`}
    >
      {/* <Link to={`${id}`}>
        <img src={image} alt={image} />
      </Link> */}

      <div
        className={`border w-[${size}]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          loop="true"
          className=" object-contain"
          navigation={showCarusel}
        >
          <SwiperSlide>
            <Link to={`${id}`}>
              <img src={image} alt={image} />
            </Link>
          </SwiperSlide>
          {images?.map((a, i) => {
            return (
              <SwiperSlide key={i}>
                <Link to={`${id}`}>
                  <img src={a.link} alt={a} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

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

      <div className="text-black font-poppins">
        <h3 className="text-sm uppercase font-light leading-none">{marke}</h3>
        <Link to={`${id}`}>
          <span className="text-[14px] leading-none">{title}</span>
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
