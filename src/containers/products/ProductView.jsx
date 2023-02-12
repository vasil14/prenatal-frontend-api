import { useContext, useEffect } from 'react';
//ContextProvider
import ProductContext from '../../Context/ProductContext';
//Components
import BreadcrumbComponent from '../../components/BreadcrumbComponent';
import ProductDetailsComponent from '../../components/products/ProductDetailsComponent';
import CardViewComponent from '../../components/cards/CardViewComponent';

const ProductView = () => {
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    const id = localStorage.getItem('PRODUCT_ID');
    if (id) getProduct(id);
  }, [localStorage.getItem('PRODUCT_ID')]);

  return (
    <>
      <div className="mt-4 container mx-auto">
        <BreadcrumbComponent
          product_type={product[0]?.product_type?.replaceAll(' > ', '/')}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col container mx-auto">
          <CardViewComponent product={product} />
          <ProductDetailsComponent product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductView;
