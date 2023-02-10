import React from "react";

const InputFieldComponent = ({ refProp, type, placeholder }) => {
  return (
    <div className="mb-2">
      <input
        ref={refProp}
        type={type}
        placeholder={placeholder}
        className="block w-full px-4 py-2 my-4 text-purple-700 bg-white border border-gray-500 rounded-md  focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </div>
  );
};

export default InputFieldComponent;
