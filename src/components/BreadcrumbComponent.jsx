import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const BreadcrumbComponent = ({ product_type }) => {
  const categoryList = product_type?.split('/');
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={'/'}>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      {categoryList?.map((category, index) => {
        return (
          <Breadcrumb.Item key={index}>
            <Link to={`/products/${category.replaceAll(' ', '-')}`}>
              {category.charAt(0).toUpperCase() +
                category.slice(1).replaceAll('-', ' ')}
            </Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
