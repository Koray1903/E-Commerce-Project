import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from "../../redux/actions.js";

const ProductTile = () => {

    const dispatch = useDispatch();
    const PopularProducts = useSelector(state => state.shopReducer.PopularProducts);


    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>

        </>
    );
};

export default ProductTile;