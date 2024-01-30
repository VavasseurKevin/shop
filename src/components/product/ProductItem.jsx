import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import lunette3 from "../../static/lunettes3.png";

const ProductItem = ({ product, itemOnBasket }) => {
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? 'product-loading' : ''}`}
        style={{
          border: product ? '1px solid #a6a5a5' : '',
          boxShadow: product ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        <div className="product-card-content" role="presentation">
          <div className="product-card-img-wrapper">
            {product.image ? (
              <img
                alt={product.name || "lunette3"}
                className="product-card-img"
                src={product.image}
              />
            ) : (
              <Skeleton width="100%" height="90%" />
            )}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {product.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand">
              {product.brand || <Skeleton width={60} />}
            </p>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${
              itemOnBasket ? 'button-border button-border-gray' : ''
            }`}
            type="button"
          >
            {itemOnBasket ? 'Remove from basket' : 'Add to basket'}
          </button>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default ProductItem;
