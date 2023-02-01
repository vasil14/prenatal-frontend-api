import React, { useState } from 'react';
import Checkbox from '../Checkbox';

const ColoreDropdown = () => {
  const [getColors, setGetColors] = useState([]);

  const handleChange = (e) => {
    if (getColors.includes(e)) {
      const filtered = getColors.filter((ele) => ele != e);
      setGetColors([...filtered]);
    } else {
      setGetColors((current) => [...current, e]);
    }
  };
  console.log(getColors);

  return (
    <div className="absolute w-full bg-white drop-shadow-xl z-40">
      <div className="space-x-4 min-w-full">
        {/* Abbigliamento mamma */}
        <div className="px-5 pt-5 ">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5">
            Filtra per colore
          </h1>

          <div className="px-5 pb-2">
            <div className="flex justify-start flex-wrap -ml-4 ">
              <div className="ml-4 mt-4 min-w-[200px] ">
                <input
                  className="border-red"
                  type="checkbox"
                  onChange={() => handleChange('Azzuro')}
                />{' '}
                <span className="ml-2 pt-1">Azzuro</span>
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Beige')}
                />{' '}
                Beige
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Bianco')}
                />{' '}
                Bianco
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Fantasia')}
                />{' '}
                Fantasia
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Giallo')}
                />{' '}
                Giallo
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Grigio')}
                />{' '}
                Grigio
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Marrone')}
                />{' '}
                Marrone
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Non definito')}
                />{' '}
                Non definito
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Panna')}
                />{' '}
                Panna
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Rosa')}
                />{' '}
                Rosa
              </div>
              <div className="ml-4 mt-4 min-w-[200px]">
                <input
                  className="border-gray-400"
                  type="checkbox"
                  onChange={() => handleChange('Rosso')}
                />{' '}
                Rosso
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 pb-3 pt-5">
        <button
          className="rounded-full bg-[#e72b6f] text-white  text-sm font-normal uppercase px-5 py-1.5"
          aria-label="Applica"
        >
          <span className="px-4 py-1">applica</span>
        </button>
      </div>
    </div>
  );
};

export default ColoreDropdown;
