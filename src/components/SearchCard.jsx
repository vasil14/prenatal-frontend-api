import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import logo_sm from "../assets/logo-small.jpg";

const SearchCard = ({ image, id, title, price }) => {
  const { setProductId, setShowSearchDropdown } = useContext(ProductContext);
  const handleClick = (id) => {
    setProductId(id);
    setShowSearchDropdown(false);
  };

  let _title = title.replaceAll("/", "-");
  let _title_ = _title.replaceAll(" ", "-");
  return (
    <Link to={`/product/${_title_}`}>
      <div
        className="w-[270px] h-[500px] border border-gray-300 hover:border-primary rounded-md"
        onClick={() => handleClick(id)}
      >
        <div className="flex flex-col">
          <div className="w-[245px] mx-auto">
            <img src={image} alt="cover" />
          </div>
          <div className="mt-3 flex flex-col px-3">
            <div className="w-[120px] mx-auto py-2">
              <img src={logo_sm} alt="logo" />
            </div>
            <div className="text-sm justify-items-start">{title}</div>
            {title.length < 34 && <div className="h-5"></div>}
            <div className="flex flex-col mt-3">
              <div className="grid justify-items-start text-sm font-semibold font-poppins">
                {price}
              </div>
              <div className="grid justify-items-end">
                <button className="bg-primary w-9 h-9 items-end rounded-md ">
                  {" "}
                  <span className="p-auto font-poppins text-2xl font-bold text-white">
                    +
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
