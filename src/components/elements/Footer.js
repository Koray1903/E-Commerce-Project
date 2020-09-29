import React, {useState, useCallback} from 'react';
import "../../style/Footer.scss";
import SocialNetworkLogos from "./SocialNetworkLogos";

const Footer = ({screenWidth}) => {

    let mobileBoolean;
    mobileBoolean = screenWidth >= 768;

    const [showContacts, setShowContacts] = useState(mobileBoolean);
    const [showCategories, setShowCategories] = useState(mobileBoolean);
    const [showAbout, setShowAbout] = useState(mobileBoolean);


    const categories = ["Alcohol", "Art", "Books", "Drink", "Electronics", "Home", "Jewelry", "Kids & Baby", "Men's Fashion",
        "Mobile", "Motorcycles", "Movies", "Music", "Sport", "Toys", "Travel", "Women's Fashion"];

    const about = ["About us", "Delivery", "Testimonials", "Contact"];

    const handleContactsClick = useCallback(() => {
        if (screenWidth < 768) {
            setShowContacts(!showContacts);
            setShowCategories(false);
            setShowAbout(false);
        }
    }, [showContacts]);

    const handleCategoriesClick = useCallback(() => {
        if (screenWidth < 768) {
            setShowCategories(!showCategories);
            setShowContacts(false);
            setShowAbout(false);
        }
    }, [showCategories]);

    const handleAboutClick = useCallback(() => {
        if (screenWidth < 768) {
            setShowAbout(!showAbout);
            setShowCategories(false);
            setShowContacts(false);
        }
    }, [showAbout]);


    return (
        <section className="Footer">
            <>
                <p className="Footer__Text">© Copyright {(new Date()).getFullYear()}.<br/>All Rights Reserved.</p>

                {/* CONTACTS  */}
                <div className="Footer__Option__Outer" onClick={handleContactsClick}>
                    <p className="Footer__Option__Text">contact</p>

                    {screenWidth < 768 ? // ONLY IN MOBILE VERSION
                        <>
                            <i className={`fas fa-caret-down Footer__Option__Down ${!showContacts ? "Element__Display" : "Element__Hide"}`}/>
                            <i className={`fas fa-caret-up Footer__Option__Up ${showContacts ? "Element__Display" : "Element__Hide"}`}/>
                        </>
                        : null}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__Contacts__Desktop">
                    <p className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}>
                        Headquarters:<br/>
                        5600, Blvd. des Galeries, Bur 530<br/>
                        Québec, Québec G2K 2H6</p>

                    <a className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}
                       href="mailto:contact@osf-global.com">contact@osf-global.com</a>

                    <a className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}
                       href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
                </div>
                {/* CONTACTS  */}
            </>


            {/* CATEGORIES  */}
            <>
                <div className="Footer__Option__Outer" onClick={handleCategoriesClick}>
                    <p className="Footer__Option__Text">categories</p>

                    {screenWidth < 768 ? // ONLY IN MOBILE VERSION
                        <>
                            <i className={`fas fa-caret-down Footer__Option__Down ${!showCategories ? "Element__Display" : "Element__Hide"}`}/>
                            <i className={`fas fa-caret-up Footer__Option__Up ${showCategories ? "Element__Display" : "Element__Hide"}`}/>
                        </>
                        : null}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__Categories__Desktop">
                    {categories.map((element, index) => (
                        <p key={index}
                           className={`Footer__Text ${showCategories ? "Element__Display" : "Element__Hide"}`}>{element}</p>))}
                </div>
            </>
            {/* CATEGORIES  */}


            {/* ABOUT */}
            <>
                <div className="Footer__Option__Outer" onClick={handleAboutClick}>
                    <p className="Footer__Option__Text">about</p>

                    {screenWidth < 768 ? // ONLY IN MOBILE VERSION
                        <>
                            <i className={`fas fa-caret-down Footer__Option__Down ${!showAbout ? "Element__Display" : "Element__Hide"}`}/>
                            <i className={`fas fa-caret-up Footer__Option__Up ${showAbout ? "Element__Display" : "Element__Hide"}`}/>
                        </>
                        : null}
                </div>

                <div className="Footer__Option__Inner Footer__Option__Inner__About__Desktop">
                    {about.map((element, index) => (
                        <p key={index}
                           className={`Footer__Text ${showAbout ? "Element__Display" : "Element__Hide"}`}>{element}</p>))}
                </div>
            </>
            {/* ABOUT */}

            <SocialNetworkLogos/>

        </section>
    );
};

export default Footer;