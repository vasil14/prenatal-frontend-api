import React, { useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductContext from '../../Context/ProductContext';

const Cards = ({
  image,
  images,
  price,
  vipPrice,
  marke,
  title,
  id,
  size = '300px',
}) => {
  SwiperCore.use([Navigation]);
  const { setId } = useContext(ProductContext);
  const [showCarusel, setShowCarusel] = useState(false);

  let _title = title.replaceAll('/', '-');
  let _title_ = _title.replaceAll(' ', '-');

  const handleClick = (id) => {
    setId(id);
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
        className={`relative  max-w-sm w-[${size}] bg-white group-hover:scale-105 group-hover:drop-shadow-2xl duration-300 ease-in-out align-center  transition transform`}
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
        <div className="group-hover:scale-95 ease-in-out duration-300 transition transform">
          <div className="flex flex-row justify-between px-5 pb-5 ">
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
            <h3 className="text-sm uppercase font-light leading-none">
              {marke}
            </h3>
            <Link to={`${id}`}>
              <span className="text-[14px] leading-none">{title}</span>
            </Link>
          </div>
        </div>
        {/* <div>
         <span>disponible online</span>
          <button>hello</button>
         </div> */}
      </div>
    </div>
  );
};

export default Cards;
