import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';

const colorItems = [
  {
    key: 'azzuro',
    value: 'Azzuro',
    color: 'blue',
  },
  {
    key: 'beige',
    value: 'Beige',
    color: 'blue',
  },
  {
    key: 'bianco',
    value: 'Bianco',
    color: 'pink',
  },
  {
    key: 'grigio',
    value: 'Grigio',
    color: 'blue',
  },
  {
    key: 'biallo',
    value: 'Giallo',
    color: 'blue',
  },
  {
    key: 'marrone',
    value: 'Marrone',
    color: 'blue',
  },
  {
    key: 'non_definito',
    value: 'Non definito',
    color: 'blue',
  },
  {
    key: 'panna',
    value: 'Panna',
    color: 'blue',
  },
];

const ColoreDropdown = () => {
  const { filterCompHandler } = useContext(ProductContext);
  const [getColors, setGetColors] = useState('');

  const handleChange = (e) => {
    if (getColors.includes(e)) {
      const filtered = getColors.filter((ele) => ele != e);
      setGetColors([...filtered]);
    } else {
      setGetColors((current) => [...current, e]);
    }
  };

  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="space-x-4 min-w-full">
        <div className="px-5 pt-5 ">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Filtra per colore
          </h1>
          <div className="px-5 pb-2">
            <div className="flex justify-start flex-wrap -ml-4 ">
              {colorItems.map((item) => {
                return (
                  <div key={item.key} className="ml-4 mt-4 min-w-[200px] ">
                    <input
                      style={{ backgroundColor: `${item.color}` }}
                      type="checkbox"
                      onChange={() => handleChange(item.value)}
                    />
                    <span className="ml-2 pt-1">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 pb-3 pt-5">
        <Link to={getColors ? `?colore=${getColors}` : ''}>
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
