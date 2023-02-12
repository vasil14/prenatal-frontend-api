import { useState } from 'react';
import { Link } from 'react-router-dom';
//Components
import { Slider, Switch } from 'antd';
import ApplicaButton from './ApplicaButton';

const PrezzoComponent = () => {
  const [getValues, setValues] = useState([]);

  const onAfterChange = (value) => {
    setValues(value);
  };

  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 max-w-[300px]">
          <h1 className="text-primary text-base font-semibold px-5 pt-5 ">
            Filtra per disponibilità
          </h1>
          <div className="min-w-[200px] px-5 pt-5 inline-flex space-x-4">
            <h1>Disponibile online</h1>
            <Switch
              checkedChildren="Si"
              unCheckedChildren="No"
              defaultChecked
            />
          </div>
        </div>
        <div className="px-3 pt-3 max-w-[300px]">
          <h1 className="text-primary text-base font-semibold px-5 pt-5 ">
            Filtra per prezzo
          </h1>
          <div className="min-w-[250px] px-5 pt-5">
            <Slider
              range
              defaultValue={[0, 2000]}
              max={2000}
              tooltip={{ placement: 'bottom' }}
              open={true}
              onAfterChange={onAfterChange}
            />
          </div>
        </div>
        <div className="w-full px-5 pb-3 pt-5">
          <Link to={getValues ? `?price=${getValues}` : ''}>
            <ApplicaButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrezzoComponent;
