import React from "react";

const SizeComponent = ({ size }) => {
  const taglie = size?.split(",");
  return (
    <div className="flex flex-wrap">
      {taglie?.map((taglia, i) => (
        <button
          key={i}
          type="button"
          className="border border-gray-400 rounded-full px-2 focus:border-[#E72A6E] text-[15px] mt-4 mr-2 flex-shrink-0"
        >
          {taglia}
        </button>
      ))}
    </div>
  );
};

export default SizeComponent;
