import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";

const ColoreDropdown = ({ colors }) => {
  const { filterCompHandler } = useContext(ProductContext);
  const [getColors, setGetColors] = useState("");

  const handleChange = (color) => {
    if (getColors.includes(color)) {
      const filtered = getColors.filter((element) => element != color);
      setGetColors([...filtered]);
    } else {
      setGetColors((current) => [...current, color]);
    }
  };

  useEffect(() => {
    if (getColors) {
      localStorage.setItem("COLORS", getColors);
    } else {
      localStorage.removeItem("COLORS");
    }
  }, [getColors]);

  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="space-x-4 min-w-full">
        <div className="px-5 pt-5 ">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Filtra per colore
          </h1>
          <div className="px-5 pb-2">
            <div className="flex justify-start flex-wrap -ml-4 ">
              {colors?.map((item) => {
                return item?.colors?.map(({ name, id }) => {
                  return (
                    <div key={id} className="ml-4 mt-4 min-w-[200px] ">
                      <input
                        // style={{ backgroundColor: `${name}` }}
                        className={`bg-${name.replace(
                          "_",
                          " "
                        )} focus:bg-Nero border-gray-300 focus:border-gray-400`}
                        type="checkbox"
                        onChange={() => handleChange(name)}
                      />
                      <span className="ml-2 pt-1">{name}</span>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 pb-3 pt-5">
        <Link to={getColors ? `?colore=${getColors}` : ""}>
          <button
            className="rounded-full bg-primary text-white  text-sm font-normal uppercase px-5 py-1.5"
            aria-label="Applica"
            onClick={() => filterCompHandler(0)}
          >
            <span className="px-4 py-1">Applica</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ColoreDropdown;
