import { createContext, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const ProductContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ProductProvider = ({ children }) => {
  const [formValues, setFormValues] = useState([]);

  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [categoryChildren, setCategoryChildren] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getProducts = async (name) => {
    if (name) {
      const apiProducts = await axios.get("products?title=" + name);
      setProducts(apiProducts.data);
    }
  };

  const getProduct = async (title) => {
    const response = await axios.get("products/" + title);
    setProduct(response.data[0]);
  };

  const getProductsCategory = async (categoryName, currentPage) => {
    const response = await axios.get(
      `products/categoria-prodotto/${categoryName}?page=${currentPage}`
    );
    setProductsCategory(response.data);
  };

  const getCategoriesWithChildren = async (categoryName) => {
    const response = await axios.get("categories/" + categoryName);
    setCategoryChildren(response.data);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        getProduct,
        getProducts,
        onChange,
        formValues,
        productsCategory,
        getProductsCategory,
        user,
        token,
        setUser,
        setToken,
        categoryChildren,
        setCategoryChildren,
        getCategoriesWithChildren,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
