import React from "react";
import bannerImgMan from '../../images/banner-man.png';
import { ProductShowcaseGrid } from "../../components/product";

const FeaturedProducts = () => {
    return (
    <main className="content">
        <div className="featured">
            <div className="banner">
                <div className="banner-desc">
                    <h1>Produits Vedettes</h1>
                </div>
                <div className="banner-img">
                    <img src={bannerImgMan} alt="" />
                </div>
            </div>
            <div className="display">
                <div className="product-display-grid">
                    <ProductShowcaseGrid/>
                </div>
            </div>
        </div>
    </main>

)}

export default FeaturedProducts;