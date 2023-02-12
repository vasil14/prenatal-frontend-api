import { createContext, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';

const ProductContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ProductProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    search: '',
  });
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);
  const [categoryChildren, setCategoryChildren] = useState([]);
  const [categoryIsOpen, setCategoryIdOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});
  const [productId, _setProductId] = useState([]);
  const [showFilterComp, setShowFilterComp] = useState(0);
  const [token, _setToken] = useState();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const openSearchBar = () => {
    setShowSearchDropdown(true);
  };

  const closeSearchBar = () => {
    setShowSearchDropdown(false);
  };

  const filterCompHandler = (value) => {
    value == showFilterComp ? setShowFilterComp(0) : setShowFilterComp(value);
  };

  // Save ID in Local Storage
  const setProductId = (id) => {
    _setProductId(id);

    if (id) {
      localStorage.setItem('PRODUCT_ID', id);
    } else {
      localStorage.removeItem('PRODUCT_ID');
    }
  };

  // Save Token in Local Storage
  const setToken = (token) => {
    _setToken(token);

    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  const closeCategory = () => {
    setCategoryIdOpen(!categoryIsOpen);
  };

  const categoryHandler = (category) => {
    setCategoryIdOpen(!categoryIsOpen);
    setCategories(category);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Get Product by ID
  const getProduct = async (getId) => {
    const response = await axios.get('products/' + getId);
    setProduct(response.data);
  };

  // Get Products by title
  const getProducts = async (name) => {
    const apiProducts = await axios.get('products?title=' + name);
    setProducts(apiProducts.data);
  };

  // Get Products by Category
  const getProductsCategory = async (categoryName, currentPage, colore) => {
    if (colore) {
      const response = await axios.get(
        `products/category/${categoryName.replaceAll(
          '-',
          ' '
        )}?page=${currentPage}&colore=${colore}`
      );
      setProductsCategory(response.data);
    } else {
      const response = await axios.get(
        `products/category/${categoryName.replaceAll(
          '-',
          ' '
        )}?page=${currentPage}`
      );
      setProductsCategory(response.data);
    }
  };

  // Get Category with subCategories
  const getCategoriesWithChildren = async (categoryName) => {
    const response = await axios.get(
      'category/' + categoryName.replaceAll('-', ' ')
    );
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
        closeCategory,
        categoryIsOpen,
        categoryHandler,
        categories,
        productId,
        setProductId,
        showFilterComp,
        filterCompHandler,
        openSearchBar,
        closeSearchBar,
        showSearchDropdown,
        setShowSearchDropdown,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
