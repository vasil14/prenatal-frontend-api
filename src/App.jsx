import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ProductIndex from "./components/products/ProductIndex";
import ProductCreate from "./components/products/ProductCreate";
import ProductEdit from "./components/products/ProductEdit";

function App() {
  return (
    <div className="bg-slate-200">
      <nav>
        <ul className="flex">
          <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            <Link to="/">Products</Link>
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
  );
}

export default App;
