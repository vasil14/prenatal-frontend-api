import React from "react";
import ProductContext from "../../Context/ProductContext";
import { useContext, useEffect } from "react";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";
import CardViewComponent from "../../components/cards/CardViewComponent";

const ProductView = () => {
  const { product, getProduct } = useContext(ProductContext);

  useEffect(() => {
    const id = localStorage.getItem("PRODUCT_ID");
    if (id) {
      getProduct(id);
      window.scrollTo({ top: 0 });
    }
  }, [localStorage.getItem("PRODUCT_ID")]);

  return (
    <div>
      <div className="mt-4 container mx-auto">
        <BreadcrumbComponent
          product_type={product[0]?.product_type?.replaceAll(" > ", "/")}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col container mx-auto">
          <CardViewComponent product={product} />
          <ProductDetailsComponent product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
