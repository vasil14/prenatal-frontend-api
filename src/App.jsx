import { Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./components/Home";
import ProductIndex from "./components/products/ProductIndex";
import ProductCreate from "./components/products/ProductCreate";
import ProductEdit from "./components/products/ProductEdit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ProductProvider>
      <div className=" ">
        <Navbar />
        <div className="max-w-[1300px] mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductIndex />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
          </Routes>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
