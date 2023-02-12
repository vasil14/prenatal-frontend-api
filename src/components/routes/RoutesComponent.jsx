import { Routes, Route } from 'react-router-dom';
//Components
import Login from '../user/Login';
import Register from '../user/Register';
import Home from '../../containers/home/Home';
import ProductView from '../../containers/products/ProductView';
import ProductCategory from '../../containers/products/ProductCategory';

const RoutesComponent = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1300px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/product/:title" element={<ProductView />} />
            <Route path="/products/:categoryName" element={<ProductCategory />}>
              <Route path=":subCat_1" element={<ProductCategory />} />
              <Route path=":subCat_1/:subCat_2" element={<ProductCategory />} />
              <Route
                path=":subCat_1/:subCat_2/:subCat_3"
                element={<ProductCategory />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default RoutesComponent;
