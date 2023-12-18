import { ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    CANCEL_GET_PRODUCTS,
    CLEAR_SEARCH_STATE,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS
  } from "../../constants/constants"

  export const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: lastRef
  });

  export const getProductsSuccess = (products) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
  });