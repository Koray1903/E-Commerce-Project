import React, {useState, useCallback} from "react";
import "../../style/Fixed.scss";
import LoginModal from "./LoginModal";
import {Link} from "react-router-dom";

const Fixed = () => {

    // LOGIN MODAL
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false), [show]);
    const handleShow = useCallback(() => setShow(true), [show]);
    // LOGIN MODAL

    return (
        <section className="Fixed">

            <i className="fas fa-search Fixed__Icon"/>

            <i className="far fa-user Fixed__Icon"/>

            <i className="far fa-heart Fixed__Icon"/>

            {/* AMOUNT TO BE IMPLEMENTED */}
            <Link to="/cart">
                <i className="fas fa-shopping-bag Fixed__Icon"/>
            </Link>
            {/* AMOUNT TO BE IMPLEMENTED */}

            {/* LOGIN MODAL */}
            <LoginModal show={show} handleClose={handleClose}/>
            {/* LOGIN MODAL */}
        </section>
    );
};

export default Fixed;