import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { selectFilter } from "../../selectors/selector";
import ProductList from "../../components/product/ProductList";
import { ProductGrid } from "../../components/product";
import useScrollTop from "../../hooks/useScrollTop";

const Shop = () => {
  useScrollTop();

  // Utilisation de useSelector avec une fonction de comparaison personnalisée (shallowEqual)
  const filteredProducts = useSelector(
    (state) => selectFilter(state.products.items, state.filter),
    shallowEqual
  );

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <ProductList filteredProducts={filteredProducts}>
          <ProductGrid />
        </ProductList>
      </section>
    </main>
  );
};

export default Shop;
