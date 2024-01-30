import React from "react";
import lunette3 from "../../static/lunettes3.png";

const ProductItem = () => {
    return (
        <div className="product-card">
            <div className="product-card-content">
                <div className=" product-card-img-wrapper">
                    <img src={lunette3} className="product-card-img"/>
                </div>
                <div className="product-details">
                    <h5 className="product-card-name text-overflow-ellipsis margin-auto">
                        Gucci C005
                    </h5>
                    <p className="product-card-brand">
                        Lenette de vue
                    </p>
                    <h4 className="product-card-price ">
                    150 $
                    </h4>
                </div>
            </div>        

            <button 
            className={`product-card-button button-small button button-block`}
            type="button">
                Ajouter au panier
            </button>
        </div>
    )
}

export default ProductItem;