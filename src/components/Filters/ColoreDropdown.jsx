import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../Context/ProductContext';
import ApplicaButton from './ApplicaButton';

const ColoreDropdown = ({ colors }) => {
  const { filterCompHandler } = useContext(ProductContext);
  const [selectedColor, setSelectedColor] = useState([]);

  useEffect(() => {
    if (selectedColor) {
      localStorage.setItem('COLORS', selectedColor);
    } else {
      localStorage.removeItem('COLORS');
    }
  }, [selectedColor]);

  const handleChange = (color) => {
    if (selectedColor.includes(color)) {
      const filtered = selectedColor.filter((element) => element != color);
      setSelectedColor([...filtered]);
    } else {
      setSelectedColor((current) => [...current, color]);
    }
  };

  return (
    <>
      <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
        <div className="space-x-4 min-w-full">
          <div className="px-5 pt-5 ">
            <h1 className="text-primary text-base font-semibold px-5 pt-5">
              Filtra per colore
            </h1>
            <div className="px-5 pb-2">
              <div className="flex justify-start flex-wrap -ml-4 ">
                {colors?.map((item) => {
                  return item?.colors?.map(({ name, id }) => {
                    return (
                      <div key={id} className="ml-4 mt-4 min-w-[200px] ">
                        <input
                          className={`bg-${name.replace(
                            '_',
                            ' '
                          )} focus:bg-${name.replace(
                            '_',
                            ' '
                          )} border-gray-300 focus:border-gray-400`}
                          type="checkbox"
                          onChange={() => handleChange(name)}
                        />
                        <span className="ml-2 pt-1">{name}</span>
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-5 pb-3 pt-5">
          <Link to={selectedColor ? `?colore=${selectedColor}` : ''}>
            <ApplicaButton onClick={() => filterCompHandler(0)} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ColoreDropdown;
