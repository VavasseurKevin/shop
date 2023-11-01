import React from 'react';
import lunette1 from "../../static/lunettes1.png";

const ProductFeatured = () => {

    return (
        <div className="product-display" >
            <div className="product-display-img">
            <img alt="lunette1" src={lunette1} />
            </div>
            <div className="product-display-details">
                <h2>Gucci GG-0165</h2>
                <p className="text-subtle text-italic">
                    Lunette de vue
                </p>
            </div>
        </div>
    )

};

export default ProductFeatured;