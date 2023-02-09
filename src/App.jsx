import { Routes, Route, useLocation } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./containers/home/Home";
import ProductCategory from "./components/products/ProductCategory";
import ProductView from "./components/products/ProductView";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <ProductProvider>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <div className="bg-white w-full left-0 top-0 z-50  sticky">
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
              <Route exact path="/product/:title" element={<ProductView />} />
              <Route
                path="/products/:categoryName"
                element={<ProductCategory />}
              >
                <Route path=":subCat_1" element={<ProductCategory />} />
                <Route
                  path=":subCat_1/:subCat_2"
                  element={<ProductCategory />}
                />
                <Route
                  path=":subCat_1/:subCat_2/subCat_3"
                  element={<ProductCategory />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <Footer />
      )}
    </ProductProvider>
  );
}

export default App;
