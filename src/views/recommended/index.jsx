import React from "react";
import { ProductShowcaseGrid } from "../../components/product";
import bannerImgWoman from '../../images/banner-woman.png';

const RecommendedProducts = () => {return (
    <main className="content">
        <div className="featured">
            <div className="banner">
                <div className="banner-desc">
                    <h1>Produits Recommandées</h1>
                </div>
                <div className="banner-img">
                    <img src={bannerImgWoman} alt="" />
                </div>
            </div>
            <div className="display">
                <div className="product-display-grid">
                    <ProductShowcaseGrid/>
                </div>
            </div>
        </div>
    </main>

)

}

export default RecommendedProducts;