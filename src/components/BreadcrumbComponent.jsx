import React from "react";
import { Breadcrumb } from "flowbite-react";

const BreadcrumbComponent = ({ product_type }) => {
  const a = product_type?.split(" > ");

  return (
    <Breadcrumb aria-label="Breadcrumb">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {a?.map((category, index) => {
        return (
          <Breadcrumb.Item key={index} href="#">
            {category}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;