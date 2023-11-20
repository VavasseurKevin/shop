import React from "react";
import lunette8 from "../../static/lunettes8.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductFeatured = () => {
    
  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div className="product-display">
        <div className="product-display-img">
          <img alt="lunette1" src={lunette8} />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="product-display-details">
          <Link to={ROUTES.VIEW_PRODUCT}>
            <h2>
              Gucci GG-0167 <Skeleton width={80} />
            </h2>
          </Link>
          <p className="text-subtle text-italic">
            Lunette de vue <Skeleton width={40} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductFeatured;
