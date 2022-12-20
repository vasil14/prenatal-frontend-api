import { Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./components/Home";
import ProductIndex from "./components/products/ProductIndex";
import ProductCreate from "./components/products/ProductCreate";
import ProductEdit from "./components/products/ProductEdit";

function App() {
  return (
    <ProductProvider>
      <div className="bg-slate-200 ">
        <div className="max-w-[1310px] mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
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
