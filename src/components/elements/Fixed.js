import React, {useState, useCallback} from "react";
import "../../style/Fixed.scss";
import LoginModal from "./LoginModal";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Fixed = () => {

    const itemAmountInCart = useSelector(state => state.shopReducer.itemAmountInCart);
    const itemAmountInWishlist = useSelector(state => state.shopReducer.itemAmountInWishlist);

    // LOGIN MODAL
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), [show]);
    const handleShow = useCallback(() => setShow(true), [show]);
    // LOGIN MODAL

    return (
        <section className="Fixed">

            {/* SEARCH */}
            <i className="fas fa-search Fixed__Icon__Logo"/>
            {/* SEARCH */}


            {/* LOG IN */}
            <i className="far fa-user Fixed__Icon__Logo Login_Icon"
               onClick={handleShow}/>
            {/* LOG IN */}


            {/* WISHLIST */}
            <div className="Fixed__Icon">
                <i className="far fa-heart Fixed__Icon__Logo"/>

                <div className="Fixed__Icon__Amount__Circle">
                    <p className="Fixed__Icon__Amount">{itemAmountInWishlist}</p>
                </div>
            </div>
            {/* WISHLIST */}


            {/* CART */}
            <div className="Fixed__Icon">
                <Link to="/cart">
                    <i className="fas fa-shopping-bag Fixed__Icon__Logo"/>
                </Link>


                <div className="Fixed__Icon__Amount__Circle">
                    <p className="Fixed__Icon__Amount">{itemAmountInCart}</p>
                </div>
            </div>
            {/* CART */}


            {/* LOGIN MODAL */}
            <LoginModal show={show} handleClose={handleClose}/>
            {/* LOGIN MODAL */}
        </section>
    );
};

export default Fixed;