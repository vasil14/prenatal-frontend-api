import { createContext, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    color: "",
  });

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getProducts = async () => {
    const apiProducts = await axios.get("products");
    setProducts(apiProducts.data);
  };

  const getProduct = async (id) => {
    const response = await axios.get("products/" + id);
    setProduct(response.data[0]);
  };

  const getProductsCategory = async (categoryName) =>{
    const response = await axios.get('products/categoria-prodotto/' + categoryName)
    setProductsCategory(response.data)
  }

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
        getProductsCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
