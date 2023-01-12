import { Routes, Route, useLocation } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./components/Home";
import ProductIndex from "./components/products/ProductIndex";
import ProductEdit from "./components/products/ProductEdit";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import CategoryDropdown from "./components/CategoryDropdown";

function App() {
  const location = useLocation();
  return (
    <ProductProvider>
      <div>
        {location.pathname.match(/login/) ||
        location.pathname.match(/register/) ? null : (
          <Navbar />
        )}

        <div className="xl:max-w-[1300px] lg:max-w-[900px] md:max-w-[650px] xs:max-w-[600px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:categoryName" element={<ProductIndex />} />
            <Route
              path="/products/:categoryName/:id"
              element={<ProductEdit />}
            />
          </Routes>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
