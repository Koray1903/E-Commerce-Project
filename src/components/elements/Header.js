import React, {useState, useCallback} from "react";
import {Link} from "react-router-dom";
import "../../style/Header.scss";
import Navigation from "./Navigation";
import Fixed from "./Fixed";

const Header = ({screenWidth}) => {

    const [showNavigation, setShowNavigation] = useState(false);

    const handleShowNavigation = useCallback(() => {
        setShowNavigation(!showNavigation);
    }, [showNavigation]);

    const currencyArray = ["EN", "UA", "RU"];
    const languageArray = ["USD", "UAH", "EUR"];

    return (
        <section className="Header">
            {screenWidth < 768 ?
                // MOBILE VERSION
                <div className="Header__Mobile">
                    {!showNavigation ?
                        <i className="fas fa-bars Header__Mobile__Hamburger__Open"
                           onClick={handleShowNavigation}/>
                        :

                        <i className="fas fa-times Header__Mobile__Hamburger__Close"
                           onClick={handleShowNavigation}/>
                    }

                    <Link className="Header__Mobile__Logo__Icon" to="/">
                        <img className="Header__Mobile__Logo__Icon" src="../header/Logo.png" alt="logo"/>
                    </Link>
                </div>
                // MOBILE VERSION
                :
                // TABLET & DESKTOP VERSION
                <div className="Header__TabletDesktop">
                    <Link to="/">
                        <img className="Header__TabletDesktop__Icon" src="../header/Logo.png" alt="logo"/>
                    </Link>
                    <div className="Header__TabletDesktop__Text">
                        <Link to="/">
                            <p className="Header__TabletDesktop__Text__1">osf</p>
                            <p className="Header__TabletDesktop__Text__2">academy</p>
                        </Link>
                    </div>
                </div>
                // TABLET & DESKTOP VERSION
            }


            {/* MOBILE VERSION NAVIGATION MENU */}
            {screenWidth < 768 && showNavigation ? <Navigation screenWidth={screenWidth}/> : null}
            {/* MOBILE VERSION NAVIGATION MENU */}

            {/* TABLET & DESKTOP VERSION NAVIGATION MENU */}
            {screenWidth > 767 ? <Navigation screenWidth={screenWidth}/> : null}
            {/* TABLET & DESKTOP VERSION NAVIGATION MENU */}


            {/* LANGUAGE & CURRENCY  */}
            <div className="Header__LanguageCurrency">
                <select className="Header__LanguageCurrency__Inner__Filter">
                    {languageArray.map((element, index) => (
                        <option value={element} key={index}>{element}</option>
                    ))}
                </select>

                <select className="Header__LanguageCurrency__Inner__Filter">
                    {currencyArray.map((element, index) => (
                        <option value={element} key={index}>{element}</option>
                    ))}
                </select>
            </div>
            {/* LANGUAGE & CURRENCY  */}


            {/* TABLET & DESKTOP VERSION FIXED */}
            {screenWidth > 767 ? <Fixed/> : null}
            {/* TABLET & DESKTOP VERSION FIXED */}
        </section>
    );
};

export default Header;