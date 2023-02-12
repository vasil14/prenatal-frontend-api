import { useContext } from 'react';
import { Link } from 'react-router-dom';
//Components
import AccountDropdown from './user/AccountDropdown';
import CategoryDropdown from './CategoryDropdown';
import ShoppingCart from './shoppingCart/ShoppingCart';
import SearchDropdownComponent from '../components/search/SearchDropdownComponent';
import ProductContext from '../Context/ProductContext';
import SearchBarComponent from './search/SearchBarComponent';
//Constants
import { categoryList, specialCat } from '../constants/index';
//Icons
import { MenuOutlined } from '@ant-design/icons';
import searchIcon from '../assets/images/search_icon.png';
import logo from '../assets/images/prenatal.png';
import location from '../assets/images/location.png';

const Navbar = () => {
  const {
    closeCategory,
    categoryIsOpen,
    categoryHandler,
    categories,
    openSearchBar,
    closeSearchBar,
    showSearchDropdown,
  } = useContext(ProductContext);
  return (
    <div className=" border-b ">
      {/* Navbar desktop */}
      <div className="hidden lg:block xl:max-w-[1300px] mx-auto ">
        <div>
          <div className="container mx-auto pt-5">
            <div className="pb-2 px-2 flex justify-between items-center md:space-x-16 ">
              <div className="w-60">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-[208px] " />
                </Link>
              </div>
              <SearchBarComponent
                onClick={openSearchBar}
                color="border-gray-800"
                placeholder="Che prodotto stai cercando?"
                paddingX="px-16"
              />
              <div className="flex flex-row  w-72">
                <p className="text-[9px] text-right ">
                  PRENOTA & RITIRA <br /> IN NEGOZIO
                </p>
                <div className="flex flex-row h-[25px] pr-3">
                  <img src={location} alt="icons" className="ml-4 " />
                  <div className="ml-4">
                    <AccountDropdown />
                  </div>
                  <div className="ml-4 ">
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            </div>
            <div className="container z-10">
              <div className="flex items-center justify-between my-5 space-x-2">
                <div className="container mx-auto">
                  {categoryList.map((category, index) => {
                    return (
                      <div
                        onClick={() => categoryHandler(category)}
                        className={`cursor-pointer inline-block p-2`}
                        key={index}
                      >
                        {!categoryIsOpen && category}
                        {categoryIsOpen && (
                          <Link
                            to={`products/${category
                              .replaceAll(' ', '-')
                              .toLowerCase()}`}
                          >
                            <h1
                              onClick={closeCategory}
                              className="relative text-base leading-5 text-gray-900 hover:text-primary font-normal"
                            >
                              {category}
                            </h1>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between space-x-2">
                  {specialCat.map((special, index) => {
                    return (
                      <div
                        className={`${
                          index === specialCat.length - 1 ? 'mr-0' : 'mr-5'
                        } inline-block`}
                        key={index}
                      >
                        <h1 className="relative text-base leading-5 text-gray-900 hover:text-primary font-normal">
                          {special}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar mobile */}
      <div className="flex md:h-16 justify-between items-center lg:hidden relative px-2 py-1 container mx-auto">
        <div className="lg:hidden flex flex-grow flex-shrink flex-1 pt-2">
          <div>
            <button className="inline-flex items-center justify-center p-3 text-gray-700 focus:text-black focus:bg-gray-100 focus:outline-none print:hidden">
              <MenuOutlined style={{ fontSize: '24px' }} />
            </button>
          </div>
          <div className="p-2">
            <img src={location} alt="location" className="w-5 h-7" />
          </div>
        </div>
        <div className="block px-2 lg:hidden">
          <img src={logo} alt="logo" className="h-5" />
        </div>
        <div className="lg:hidden flex flex-grow flex-shrink justify-end flex-1 pt-2">
          <div className="p-2">
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <div className="p-2">
            <ShoppingCart />
          </div>
        </div>
      </div>
      {categoryIsOpen && <CategoryDropdown categoryName={categories} />}
      {showSearchDropdown && (
        <SearchDropdownComponent onClick={closeSearchBar} />
      )}
    </div>
  );
};

export default Navbar;
