//Icons
import item from '../../assets/images/item.jpg';
import Trash from '../../assets/images/trash.svg';
//Components
import IncDecCounter from './IncDecCounter';

const CartDropdown = () => {
  return (
    <div className="absolute right-0 top-9 w-[310px] drop-shadow-[0px_0px_20px_rgba(0,0,0,0.15)] bg-white z-50">
      <div className="p-4 border-b border-gray-100">
        <p className="text-base font-bold text-primary">Il tuo carello (1)</p>
      </div>
      <div className="flex flex-nowrap justify-between items-center px-4 py-3.5 space-x-1 ">
        <div className="w-14 flex-shrink-0 px-2">
          <img src={item} alt="item" />
        </div>
        <div className="flex-1">
          <p className="block text-sm font-light text-black uppercase">
            Bongaboo
          </p>
          <p className="block text-sm font-light text-black leading-4 mb-2">
            Bugaboo sacco a pelo pine green
          </p>
          <div className="flex items-center space-x-2 pr-1">
            <IncDecCounter className="inline-flex -mr-2" />
            <img
              src={Trash}
              alt=""
              className="p-2 text-gray-600 hover:text-red-500 w-8"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-end ">
            <p className="text-sm font-medium whitespace-nowrap text-primary">
              € 139,90
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 space-y-4 border-t border-gray-100">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-normal">Spedizone :</p>
            <p className="text-sm font-medium flex-shrink-0 ml-2 uppercase text-primary">
              GRATIS
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="uppercase text-sm font-normal flex">Totale :</p>
            <p className="text-lg font-medium flex-shrink-0 ml-2 text-primary">
              € 139,90
            </p>
          </div>
        </div>
        <button className="w-full flex uppercase justify-center items-center text-center rounded-full px-5 border focus:outline-none hover:bg-white hover:border-primary hover:text-primary text-base py-2 text-white bg-primary ">
          CONCLUDI l'ORDINE
        </button>
      </div>
    </div>
  );
};

export default CartDropdown;
