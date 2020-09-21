import React, {useState, useCallback} from 'react';
import "../../style/Fixed.scss"
import LoginModal from "./LoginModal";

const Fixed = () => {

    // LOGIN MODAL
    const [show, setShow] = useState(false);

    const handleClose = useCallback(() => setShow(false),[show]);
    const handleShow = useCallback(() => setShow(true),[show]);
    // LOGIN MODAL

    return (
        <section className="Fixed">

            <img className="Fixed__Icon"
                 src="../fixed/search_icon.svg"
                 alt="search_icon"/>

            <img className="Fixed__Icon"
                 src="../fixed/user_icon.svg"
                 alt="user_icon"
                 onClick={handleShow}/>

            <img className="Fixed__Icon"
                 src="../fixed/favorite_icon.svg"
                 alt="favorite_icon"/>
            {/* AMOUNT TO BE IMPLEMENTED */}

            <img className="Fixed__Icon"
                 src="../fixed/user_icon.svg"
                 alt="user_icon"/>
            {/* AMOUNT TO BE IMPLEMENTED */}

            {/* LOGIN MODAL */}
            <LoginModal show={show} handleClose={handleClose}/>
            {/* LOGIN MODAL */}
        </section>
    );
};

export default Fixed;