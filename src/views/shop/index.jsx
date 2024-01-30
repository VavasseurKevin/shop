import React from "react";
import { ProductGrid } from "../../components/product";
import useScrollTop from "../../hooks/useScrollTop";
import { shallowEqual, useSelector } from "react-redux";
import { selectFilter } from "../../selectors/selector";
import ProductList from "../../components/product/ProductList";

const Shop = () => {
  useScrollTop();

  const { products } = useSelector((state) => ({
    products: state.products.items, 
  }), shallowEqual);

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <ProductGrid products={products} />
      </section>
    </main>
  );
}

export default Shop;
