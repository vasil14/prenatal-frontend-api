import React from 'react';
import blank from '../../assets/images/blank.jpg';

const CardViewComponent = ({ product }) => {
  return (
    <div>
      <div className="basis-2/3 grid grid-cols-2 gap-6 mt-6 mr-6">
        <div className="border block border-gray-300 ">
          <img
            src={product[0]?.image_link}
            className="w-full h-full object-contain"
          />
        </div>
        {product[0]?.images?.map((image, index) => {
          if (index < 3) {
            return (
              <div
                key={index}
                className="border border-gray-300 object-contain"
              >
                <img src={image.link} className="w-full h-full" />
              </div>
            );
          }
        })}
        <div>
          {(product[0]?.images?.length == 0 ||
            product[0]?.images?.length == 2) && (
            <div className="border border-gray-300 min-h-full">
              <img src={blank} className="w-full h-full object-contain" />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap space-x-4">
        {product[0]?.images?.map((image, index) => {
          if (index >= 3) {
            return (
              <div key={index} className="w-1/6 justify-items-start ">
                <img
                  src={image.link}
                  className="border border-gray-300 object-contain"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CardViewComponent;
