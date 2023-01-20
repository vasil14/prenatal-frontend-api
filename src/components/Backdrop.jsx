import React from "react";

const Backdrop = ({ onClick, possition }) => {
  return <div className="backdrop z-20 inset-0" onClick={onClick}></div>;
};

export default Backdrop;
