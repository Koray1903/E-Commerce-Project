import React, {useState, useCallback} from "react";
import {Link} from "react-router-dom";
import "../../style/Header.scss"
import Navigation from "./Navigation";

const Header = () => {

    const [showNavigation, setShowNavigation] = useState(false)

    const handleShowNavigation = useCallback(() => {
        setShowNavigation(!showNavigation)
    }, [showNavigation])

    return (
        <>
            <section className="Header">

                {!showNavigation ?
                    <div onClick={handleShowNavigation} className="Header__Hamburger__Open">
                        <div className="Header__Hamburger__Open__Line"></div>
                        <div className="Header__Hamburger__Open__Line"></div>
                        <div className="Header__Hamburger__Open__Line"></div>
                    </div>
                    :
                    <img
                        onClick={handleShowNavigation}
                        className="Header__Hamburger__Close" src="../header/HamburgerClose.png"/>}

                <Link className="Header__Logo" to="/">
                    <img src="../header/Logo.png" alt="logo"/>
                </Link>
            </section>

            {/* NAVIGATION MENU */}
            {showNavigation ? <Navigation/> : null}
            {/* NAVIGATION MENU */}

            {/* FIXED COMPONENT WILL BE HERE IN DESKTOP VERSION */}
        </>
    );
};

export default Header;