import {
    ADD_TO_CART,
    ADD_TO_WISHLIST
} from "./types";

const initialState = {
    itemAmountInCart: 0,
    itemAmountInWishlist:0
};

const shopReducer = (state = initialState, action) => {

    switch (action.type) {


        case ADD_TO_CART:

            return {
                ...state,

            };

        case ADD_TO_WISHLIST:

            return {
                ...state,

            };

        default:
            return state;

    }
};
export default shopReducer;