//Components
import Checkbox from '../Checkbox';
import ApplicaButton from './ApplicaButton';
//Constants
import { taglie } from '../../constants/index';

const TagliaDropdown = () => {
  return (
    <div className="absolute w-full top-10 bg-white drop-shadow-xl z-40">
      <div className="flex flex-wrap">
        {taglie.map((item) => {
          return (
            <div key={item.key} className="px-3 pt-3 w-1/3">
              <h1 className="text-primary text-base font-semibold px-5 pt-5">
                {item.label}
              </h1>
              <div className="px-5 pb-2 overflow-y-auto max-h-96">
                {item.taglia.map((taglia, t) => {
                  return (
                    <Checkbox
                      key={t}
                      description={taglia}
                      rounded={'none'}
                      color={'gray-200'}
                      h={'20px'}
                      w-={'20px'}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <ApplicaButton />
      </div>
    </div>
  );
};

export default TagliaDropdown;
