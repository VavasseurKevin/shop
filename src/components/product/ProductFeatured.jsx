import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Skeleton from "react-loading-skeleton";

const ProductFeatured = ({ product }) => {
  //console.log('Product:', product);
  //console.log('Product Name:', product.name);
  //console.log('Product Brand:', product.brand);
  return (
    <div className="product-display">
      <div className="product-display-img">
        {product.image ? (
          <img alt="lunette1" src={product.image} />
        ) : (
          <Skeleton width="100%" height="100%" />
        )}
      </div>
      <div className="product-display-details">
        <Link to={ROUTES.VIEW_PRODUCT}>
          <h2>
            {product.name ? (
              product.name
            ) : (
              <Skeleton width={80} />
            )}
          </h2>
        </Link>
        <p className="text-subtle text-italic">
          {product.brand ? (
            `Marque: ${product.brand}`
          ) : (
            <Skeleton width={40} />
          )}{" "}
          <Skeleton width={40} />
        </p>
      </div>
    </div>
  );
};

export default ProductFeatured;
