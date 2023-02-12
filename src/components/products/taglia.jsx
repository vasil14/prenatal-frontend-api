import React from 'react';
import SizeComponent from '../SizeComponent';
const Taglia = ({ productChildren }) => {
  return (
    <div className="my-10 space-y-6">
      <div className="flex justify-between">
        <p>Taglie</p>
        <a href="#" className="underline-offset-2 underline">
          Guida alle taglie
        </a>
      </div>
      <SizeComponent productChildren={productChildren} />
    </div>
  );
};

export default Taglia;
