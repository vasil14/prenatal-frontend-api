import React from "react";

const Checkbox = ({ description, rounded = "4px", color = "[#404040]" }) => {
  return (
    <div className="flex flex-row form-check mt-[20px] ">
      <input
        className={`form-check-input h-[20px] w-[20px] rounded-[${rounded}] border-${color} transition duration-200 mt-1 align-top  mr-2 cursor-pointer`}
        type="checkbox"
        id="flexCheckDefault"
      />
      <label
        className="form-check-label inline-block font-poppins text-[16px] "
        htmlFor="flexCheckDefault"
      >
        {description}
      </label>
    </div>
  );
};

export default Checkbox;
