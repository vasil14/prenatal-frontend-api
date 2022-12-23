import React from "react";
import ProductContext from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

const ProductEdit = () => {
  const { product, getProduct } = useContext(ProductContext);
  let { id } = useParams();
  useEffect(() => {
    getProduct(id);
  }, []);
  // console.log(product);
  return (
    <div className="w-[270px]">
      <div className="w-[460px] h-[620px]">
        <img src={product.image_link} />
        {product.images?.map((image, index) => {
          return <img key={index} src={image.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductEdit;
