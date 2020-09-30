import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    FETCH_PRODUCTS,
    ENABLE_COOKIES
} from "./types";

import axios from "axios";

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get("PopularProducts.json")
            .then((res) => {
                dispatch(fetchedProducts(res.data));
                console.log(res.data);
            });
    };
};


export const fetchedProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        payload: products
    };
};


export const addToCart = (amount) => {
        return {
            type: ADD_TO_CART,
            payload: amount
        };
    }
;
export const addToWishlist = (amount) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: amount
    };
};

export const enableCookies = () => {
    return {
        type: ENABLE_COOKIES
    };
};