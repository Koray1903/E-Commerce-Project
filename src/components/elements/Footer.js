import React, {useState, useCallback} from "react";
import SocialNetworkLogos from "./SocialNetworkLogos";
import {Link} from "react-router-dom";
import "../../style/Footer.scss";

const Footer = ({screenWidth}) => {

    const categories = ["Alcohol", "Art", "Books", "Drink", "Electronics", "Home", "Jewelry", "Kids & Baby", "Men's Fashion",
        "Mobile", "Motorcycles", "Movies", "Music", "Sport", "Toys", "Travel", "Women's Fashion"];

    const about = ["About us", "Delivery", "Testimonials", "Contact"];

    // ONLY IN MOBILE VERSION
    let mobileVersionBoolean;
    mobileVersionBoolean = screenWidth < 768;

    const [showContacts, setShowContacts] = useState(!mobileVersionBoolean);
    const [showCategories, setShowCategories] = useState(!mobileVersionBoolean);
    const [showAbout, setShowAbout] = useState(!mobileVersionBoolean);

    const handleContactsClick = useCallback(() => {
        if (mobileVersionBoolean) {
            setShowContacts(!showContacts);
            setShowCategories(false);
            setShowAbout(false);
        }
    }, [showContacts]);

    const handleCategoriesClick = useCallback(() => {
        if (mobileVersionBoolean) {
            setShowCategories(!showCategories);
            setShowContacts(false);
            setShowAbout(false);
        }
    }, [showCategories]);

    const handleAboutClick = useCallback(() => {
        if (mobileVersionBoolean) {
            setShowAbout(!showAbout);
            setShowCategories(false);
            setShowContacts(false);
        }
    }, [showAbout]);
    // ONLY IN MOBILE VERSION

    return (
        <section className="Footer">
<>
            {/* CONTACTS */}
            <div className="Footer__Option__Outer">
                <p className="Footer__Text">© Copyright {(new Date()).getFullYear()}.<br/>All Rights Reserved.</p>

                <div className="Footer__Option__Title" onClick={handleContactsClick}>
                    <p className="Footer__Option__Text">contact</p>

                    {/* ONLY IN MOBILE VERSION */}
                    {!showContacts ?
                        <i className={`fas fa-caret-down Footer__Option__Icon__Down`}/>
                        :
                        <i className={`fas fa-caret-up Footer__Option__Icon__Up`}/>
                    }
                    {/* ONLY IN MOBILE VERSION */}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__Contacts__Desktop">
                    <p className={`Footer__Text__Address ${showContacts ? "Element__Display" : "Element__Hide"}`}>
                        Headquarters:<br/>
                        5600, Blvd. des Galeries, Bur 530<br/>
                        Québec, Québec G2K 2H6</p>

                    <a className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}
                       href="mailto:contact@osf-global.com">contact@osf-global.com</a>

                    <a className={`Footer__Text Footer__Text__OnHover ${showContacts ? "Element__Display" : "Element__Hide"}`}
                       href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                </div>
            </div>
            {/* CONTACTS */}


            {/* CATEGORIES */}
            <div className="Footer__Option__Outer">
                <div className="Footer__Option__Title" onClick={handleCategoriesClick}>
                    <p className="Footer__Option__Text">categories</p>

                    {/* ONLY IN MOBILE VERSION */}
                    {!showCategories ?
                        <i className={`fas fa-caret-down Footer__Option__Icon__Down`}/>
                        :
                        <i className={`fas fa-caret-up Footer__Option__Icon__Up`}/>
                    }
                   {/* ONLY IN MOBILE VERSION */}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__Categories__Desktop">
                    {categories.map((element, index) => (
                        <Link to="/404" className="" key={index}>
                            <p className={`Footer__Text ${showCategories ? "Element__Display" : "Element__Hide"}`}>{element}</p>
                        </Link>
                    ))}
                </div>
            </div>
            {/* CATEGORIES */}


            {/* ABOUT */}
            <div className="Footer__Option__Outer">
                <div className="Footer__Option__Title" onClick={handleAboutClick}>
                    <p className="Footer__Option__Text">about</p>

                    {/*ONLY IN MOBILE VERSION*/}
                    {!showAbout ?
                        <i className={`fas fa-caret-down Footer__Option__Icon__Down`}/>
                        :
                        <i className={`fas fa-caret-up Footer__Option__Icon__Up`}/>
                    }
                    {/*ONLY IN MOBILE VERSION*/}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__About__Desktop">
                    {about.map((element, index) => (
                        <Link to="/404" className="" key={index}>
                            <p className={`Footer__Text ${showAbout ? "Element__Display" : "Element__Hide"}`}>{element}</p>
                        </Link>
                    ))}
                </div>
            </div>
            {/* ABOUT */}

            <SocialNetworkLogos/>
</>
        </section>
    );
};

export default Footer;