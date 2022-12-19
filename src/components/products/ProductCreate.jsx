import React, { useContext } from 'react';
import ProductContext from '../../Context/ProductContext';

const ProductCreate = () => {
  const { formValues, onChange } = useContext(ProductContext);
  return (
    <div className="mt-12">
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              value={formValues['name']}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block mb-2 text-sm font-medium">
              Color
            </label>
            <input
              name="color"
              value={formValues['color']}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2"
            />
          </div>
        </div>
        <div className="my-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md ">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
