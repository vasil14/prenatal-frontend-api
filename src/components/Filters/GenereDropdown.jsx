//Components
import Checkbox from '../Checkbox';
import ApplicaButton from './ApplicaButton';
//Constants
import { genere } from '../../constants/index';

const GenereDropdown = () => {
  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        <div className="px-3 pt-3 w-1/3">
          <h1 className="text-primary text-base font-semibold px-5 pt-5">
            Filtra per sesso
          </h1>
          <div className="px-5 pb-2 flex flex-row gap-20">
            {genere.map((item, i) => (
              <Checkbox
                key={i}
                description={item}
                rounded={'none'}
                color={'gray-200'}
              />
            ))}
          </div>
        </div>
        <div className="w-full px-5 pb-3 pt-5">
          <ApplicaButton />
        </div>
      </div>
    </div>
  );
};

export default GenereDropdown;
