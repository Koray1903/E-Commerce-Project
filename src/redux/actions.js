import {
    ADD_TO_CART,
    ADD_TO_WISHLIST
} from "./types";

import axios from "axios";


export const addToCart = () => {
        return {
            type: ADD_TO_CART
        };
    }
;
export const addToWishlist = () => {
    return {
        type: ADD_TO_WISHLIST
    };
};