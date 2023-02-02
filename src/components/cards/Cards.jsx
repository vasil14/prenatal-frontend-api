import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import ProductContext from "../../Context/ProductContext";

const Cards = ({
  image,
  images,
  price,
  vipPrice,
  marke,
  title,
  id,
  size = "300px",
}) => {
  SwiperCore.use([Navigation]);
  const { setProductId } = useContext(ProductContext);
  const [showCarusel, setShowCarusel] = useState(false);

  let _title = title.replaceAll("/", "-");
  let _title_ = _title.replaceAll(" ", "-");

  const handleClick = (id) => {
    setProductId(id);
  };

  const handleMouseEnter = () => {
    setShowCarusel(true);
  };
  const handleMouseLeave = () => {
    setShowCarusel(false);
  };
  return (
    <div className="group">
      <div
        className={`relative  max-w-sm w-[${size}] bg-white group-hover:scale-105 group-hover:drop-shadow-2xl duration-300 ease-in-out align-center  transition transform group-hover:z-50 `}
      >
        <div
          className={`border w-[${size}] `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            loop="true"
            className=" object-contain"
            navigation={showCarusel}
          >
            <SwiperSlide>
              <Link to={`/product/${_title_}`} action="replace">
                <img src={image} alt={image} onClick={() => handleClick(id)} />
              </Link>
            </SwiperSlide>
            {images?.map((a, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to={`/product/${_title_}`}>
                    <img src={a.link} alt={a} onClick={() => handleClick(id)} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="relative py-2 transform md:group-hover:scale-95 transition-all duration-150 ease">
          <div className="flex items-center sm:mt-2 pb-2">
            <div className="flex-shrink-0 text-base sm:text-xl text-primary font-medium leading-none whitespace-nowrap">
              € {price}
            </div>
            <div className="border-t border-secondary flex-1 mx-2 block md:pointer-events-none appearance-none"></div>
            <div className="flex xs:items-start xs:flex-col flex-row items-center">
              <span className="flex-shrink-0 text-base sm:text-xl text-secondary text-success font-medium whitespace-nowrap md:pointer-events-none appearance-none">
                € {vipPrice}
              </span>
              <div className="flex">
                <span className="text-[10px] md:text-xxs text-secondary  uppercase block pl-1 leading-none md:pointer-events-none appearance-none">
                  Con <br />
                  Vip card
                </span>
              </div>
            </div>
          </div>
          <span className="mt-2 block text-sm font-light uppercase leading-none">
            {marke}
          </span>

          <Link to={`${id}`}>
            <div className="mb-3 min-h-8">
              <span className="block whitespace-normal text-base leading-4">
                {title}
              </span>
            </div>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 hidden bg-white transition duration-300 ease-in-out md:group-hover:block">
            <div className="relative">
              <div className="mt-5 w-full">
                <div className="flex w-full flex-col space-y-3 mb-2 px-2">
                  <button className="w-full flex uppercase justify-center items-center text-center rounded-full px-5 border transition delay-150 duration-150 ease-in-out focus:outline-none text-base py-2  bg-primary text-white border-primary hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:shadow-outline-primary cursor-pointer ">
                    AGGIUNGI AL CARRELLO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
