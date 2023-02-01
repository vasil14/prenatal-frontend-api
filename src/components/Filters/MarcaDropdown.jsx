import React from 'react';
import Checkbox from '../Checkbox';

const MarcaDropdown = () => {
  return (
    <div className="absolute w-full bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5">
            Filtra per marca
          </h1>
          <div className="px-5 pb-2 flex flex-row gap-20">
            <Checkbox
              description={'Lines'}
              rounded={'none'}
              color={'gray-200'}
            />
            <Checkbox
              description={'Mamijux'}
              rounded={'none'}
              color={'gray-200'}
            />
            <Checkbox
              description={'Prénatal'}
              rounded={'none'}
              color={'gray-200'}
            />
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
    </div>
  );
};

export default MarcaDropdown;
