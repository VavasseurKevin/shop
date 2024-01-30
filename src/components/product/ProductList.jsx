import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import MessageDisplay from "../common/MessageDisplay";
import Boundary from "../common/Boundary";
import { setLoading } from "../../redux/actions/miscActions";

const ProductList = (props) => {
  const { products, filterProducts, isLoading, requestStatus, children } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    const lastRefKey = products?.lastRefKey ?? '';
    setFetching(true);
    dispatch(getProducts(lastRefKey));
  };

  useEffect(() => {
    if (products && products.items && (products.items.length === 0 || !products.lastRefKey)) {
      fetchProducts();
    }
    return () => dispatch(setLoading(false));
  }, [products]);

  useEffect(() => {
    setFetching(false);
  }, [products?.lastRefKey]);

  if (!filterProducts || filterProducts.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        message={requestStatus?.message || "No products found."}
      />
    );
  }
  if (!filterProducts || (filterProducts.length === 0 && requestStatus)) {
    return (
      <MessageDisplay
        message={requestStatus?.message || "Something went wrong :("}
        action={fetchProducts}
        buttonLabel="Try Again"
      />
    );
  }

  return (
    <Boundary>
      {children}
      {products?.items?.length && products?.total && products?.items.length < products?.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchProducts}
            type="button"
          >
            {isFetching ? "Fetching Items..." : "Show More Items"}
          </button>
        </div>
      )}
    </Boundary>
  );
};

export default ProductList;
