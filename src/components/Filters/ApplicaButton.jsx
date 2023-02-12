import React from 'react';

const ApplicaButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="w-full px-5 pb-3 pt-5">
      <button
        className="rounded-full bg-primary text-white  text-sm font-normal uppercase px-5 py-1.5"
        aria-label="Applica"
      >
        <span className="px-4 py-1">Applica</span>
      </button>
    </div>
  );
};

export default ApplicaButton;
