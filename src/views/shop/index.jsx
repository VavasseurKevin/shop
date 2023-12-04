import React from "react";
import { ProductGrid } from "../../components/product";
import useScrollTop from "../../hooks/useScrollTop";
import { useSelector } from "react-redux";

const Shop = () => {

    useScrollTop();

   
return (
    <main className="content">
        <section className="product-list-wrapper">
            <ProductGrid />
        </section>
    </main>
)
}

export default Shop;