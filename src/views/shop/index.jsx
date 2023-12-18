import React from "react";
import { ProductGrid } from "../../components/product";
import useScrollTop from "../../hooks/useScrollTop";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "../../selectors/selector";

const Shop = () => {
    useScrollTop();

    

    return (
        <main className="content">
            <section className="product-list-wrapper">
                <ProductGrid />
            </section>
        </main>
    );
}

export default Shop;
