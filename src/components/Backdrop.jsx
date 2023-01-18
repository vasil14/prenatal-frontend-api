import React from "react";

const Backdrop = (props) => {
  return (
    <div className="backdrop top-[167px] z-20" onClick={props.onClick}></div>
  );
};

export default Backdrop;
