import React from 'react';
import lunette8 from "../../static/lunettes8.png";
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

const ProductFeatured = () => {

    return (
  
        <div className="product-display" >
            <div className="product-display-img">
            <img alt="lunette1" src={lunette8} />
            </div>
            <div className="product-display-details">
            <Link to={ROUTES.VIEW_PRODUCT}>
                <h2>Gucci GG-0165</h2>
                </Link>
                <p className="text-subtle text-italic">
                    Lunette de vue
                </p>
            </div>
        </div>
    )

};

export default ProductFeatured;