import React from "react";
import { DownOutlined } from "@ant-design/icons";

const FilterButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-400 rounded-full px-4 py-2 text-xs flex items-center "
    >
      <span className="px-4">{name}</span>
      <DownOutlined style={{ fontSize: "10px" }} />
    </button>
  );
};

export default FilterButton;
