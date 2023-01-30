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
        <Navbar />
      )}

      <div className="w-[1300px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/products/:categoryName"
            element={<ProductIndex />}
          />
          <Route exact path="/product/:title" element={<ProductEdit />} />
          <Route
            exact
            path="/products/:categoryName/:subCat"
            element={<ProductIndex />}
          />
        </Routes>
      </div>
      {location.pathname.match(/login/) ||
      location.pathname.match(/register/) ? null : (
        <Footer />
      )}
    </ProductProvider>
  );
}

export default App;
