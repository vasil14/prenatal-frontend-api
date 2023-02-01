import { Routes, Route, useLocation } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';
import Home from './components/Home';
import ProductIndex from './components/products/ProductIndex';
import ProductEdit from './components/products/ProductEdit';
import Navbar from './components/Navbar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ProductIndexSub from './components/products/ProductIndex';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  return (
    <ProductProvider>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <div className="bg-white w-full left-0 top-0 z-50 relative">
          <Navbar />
        </div>
      )}

      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="xl:max-w-[1300px] w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route exact path="/product/:title" element={<ProductEdit />} />
              {/* <Route
                exact
                path="/products/:categoryName"
                element={<ProductIndex />}
              />
              <Route
                exact
                path="/products/:categoryName/:subCat"
                element={<ProductIndex />}
              /> */}
              <Route
                path="/products/:categoryName/:subCat_1/:subCat_2/:subCat_3"
                element={<ProductIndex />}
              />
              <Route path="/products/:categoryName" element={<ProductIndex />}>
                <Route path=":subCat_1" element={<ProductIndex />} />
                <Route path=":subCat_1/:subCat_2" element={<ProductIndex />} />
                <Route
                  path=":subCat_1/:subCat_2/subCat_3"
                  element={<ProductIndex />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <div className="w-full ">
          <div className="flex justify-center items-center">
            <div className="xl:max-w-[1300px] w-full">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </ProductProvider>
  );
}

export default App;
