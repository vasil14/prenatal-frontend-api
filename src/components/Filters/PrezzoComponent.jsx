import React from "react";
import { Slider, Switch } from "antd";
const PrezzoComponent = () => {
  return (
    <div className="absolute w-full bg-white drop-shadow-xl">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 max-w-[300px]">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5 ">
            Filtra per disponibilità
          </h1>
          <div className="min-w-[200px] px-5 pt-5 inline-flex space-x-4">
            <h1>Disponibile online</h1>
            <Switch
              checkedChildren="Si"
              unCheckedChildren="No"
              defaultChecked
            />
          </div>
        </div>
        <div className="px-3 pt-3 max-w-[300px]">
          <h1 className="text-[#e72b6f] text-base font-semibold px-5 pt-5 ">
            Filtra per prezzo
          </h1>
          <div className="min-w-[250px] px-5 pt-5">
            <Slider
              range
              defaultValue={[0, 2000]}
              max={2000}
              tooltip={({ open: true }, { placement: "bottom" })}
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

export default PrezzoComponent;
