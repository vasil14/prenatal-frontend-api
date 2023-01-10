import React from "react";

function RadioButton({ ref, descritpion, id }) {
  return (
    <div className="form-check flex justify-items-center ml-4">
      <input
        ref={ref}
        className="form-check-input rounded-full h-[17px] w-[17px] appearance-none  bg-white checked:border-none checked:bg-secondary focus:outline-none transition duration-200 bg-repeat cursor-pointer mr-[10px]"
        type="radio"
        name={id}
      />
      <label className="form-check-label inline-block font-poppins font-normal text-[15px] text-primary">
        {descritpion}
      </label>
    </div>
  );
}

export default RadioButton;
