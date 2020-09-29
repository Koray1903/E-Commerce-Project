import {combineReducers} from "redux";
import shopReducer from "./reducer";

const rootReducer = combineReducers({
    shopReducer: shopReducer,
});

export default rootReducer;