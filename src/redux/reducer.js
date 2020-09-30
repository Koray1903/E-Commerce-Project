import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    FETCH_PRODUCTS,
    ENABLE_COOKIES
} from "./types";

const initialState = {
    itemAmountInCart: 0,
    itemAmountInWishlist: 0,
    PopularProducts: [],
    areCookiesEnabled: false,
};

const shopReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                itemAmountInCart: state.itemAmountInCart + action.payload
            };

        case ADD_TO_WISHLIST:
            return {
                ...state,
                itemAmountInWishlist: state.itemAmountInWishlist + action.payload
            };

        case FETCH_PRODUCTS:
            return {
                ...state,
                PopularProducts: [...action.payload]
            };

        case ENABLE_COOKIES:
            return {
                ...state,
                areCookiesEnabled: true
            };

        default:
            return state;
    }
};
export default shopReducer;