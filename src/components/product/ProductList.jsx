import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const ProductList = (props) => {

    const {
        products,
        filterProducts,
        isLoading,
        requestStatus,
        children
    } = props;

    const [isFeatching, setFetching] = useState(false);
    const dispatch = useDispatch();

    const fetchProducts = () => {
        const { lastRefKey } = products;
        setFetching(true);

         // Dispatche une action Redux pour récupérer des produits avec la clé de référence lastRefKey
        dispatch(getProducts(products.lastRefKey))
    };

    useEffect(()=>{
        if (products.items.length === 0 || !products.lastRefKey) {
            fetchProducts();
        }
    })

    return {
      
    };
};

export default ProductList;