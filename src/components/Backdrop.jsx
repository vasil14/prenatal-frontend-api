import React from "react";

const Backdrop = ({ onClick, possition }) => {
  return <div className="backdrop top-[167px] z-20" onClick={onClick}></div>;
};

export default Backdrop;
