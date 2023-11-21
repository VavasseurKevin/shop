import React from "react";
import { ProductFeatured } from ".";
import PropType from 'prop-types';

const ProductShowcase = ({ products, skeletonCount }) => {
    console.log('Products in ProductShowcase:', products);
  if (!products) {
    return null;
  }

  return (
    <div className="product-display-grid">
    {(products.length === 0) ? new Array(skeletonCount).fill({}).map((product, index) => (
        <ProductFeatured
              key={`product-skeleton ${index}`}
              product={product}
              
            />
          ))
        : products.map((product) => (
<ProductFeatured key={product.id} product={product} />
          ))}
    </div>
  );
};



export default ProductShowcase;
