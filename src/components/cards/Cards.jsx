import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Cards = ({ image, images, price, vipPrice, marke, title, id }) => {
  const [showCarusel, setShowCarusel] = useState(false);
  const handleMouseEnter = () => {
    setShowCarusel(true);
  };
  const handleMouseLeave = () => {
    setShowCarusel(false);
  };
  return (
    <div
      className="relative w-full max-w-sm bg-white hover:scale-105 hover:drop-shadow-2xl duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <Link to={`${id}`}>
        <img src={image} alt={image} />
      </Link> */}

      {!showCarusel ? (
        <Swiper>
          <Link to={id}>
            <SwiperSlide>
              {" "}
              <img src={image} alt={image} />{" "}
            </SwiperSlide>
          </Link>
          {images?.map((a, i) => {
            return (
              <Link to={id}>
                <SwiperSlide key={i}>
                  <img src={a.link} alt={a} />
                </SwiperSlide>
              </Link>
            );
          })}
        </Swiper>
      ) : (
        <Swiper navigation>
          <Link to={id}>
            <SwiperSlide>
              {" "}
              <img src={image} alt={image} />{" "}
            </SwiperSlide>
          </Link>
          {images?.map((a, i) => {
            return (
              <Link to={id}>
                <SwiperSlide key={i}>
                  <img src={a.link} alt={a} />
                </SwiperSlide>
              </Link>
            );
          })}
        </Swiper>
      )}

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
