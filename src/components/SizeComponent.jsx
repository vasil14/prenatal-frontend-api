import React from 'react';

const SizeComponent = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      {children?.map((data, i) => (
        <button
          key={i}
          type="button"
          className={`border border-gray-400 rounded-full px-2 focus:border-[#E72A6E] text-[15px] mt-4 mr-2 flex-shrink-0 disabled disabled:opacity-50 `}
          disabled={data?.stock == 0}
        >
          {data.taglia}
        </button>
      ))}
    </div>
  );
};

export default SizeComponent;
