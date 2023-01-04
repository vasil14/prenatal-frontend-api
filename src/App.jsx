import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./components/Home";
import ProductIndex from "./components/products/ProductIndex";
import ProductEdit from "./components/products/ProductEdit";
import Navbar from "./components/Navbar";
import banner from "./assets/banner.jpg";

function App() {
  return (
    <ProductProvider>
      <div>
        <Navbar />

        <div className="xl:max-w-[1300px] lg:max-w-[900px] md:max-w-[650px] xs:max-w-[600px] mx-auto">
          <div>
            <img className="mt-7" src={banner} alt="banner" />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
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
