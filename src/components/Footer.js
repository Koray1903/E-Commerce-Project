import React, {useState, useCallback} from 'react';
import "../style/Footer.scss"

const Footer = () => {

    const [showContacts, setShowContacts] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const categories = ["Alcohol", "Art", "Books", "Drink", "Electronics", "Home", "Jewelry", "Kids & Baby", "Men's Fashion", "Mobile", "Motorcycles", "Movies", "Music", "Sport", "Toys", "Travel", "Women's Fashion"]

    const about = ["About us", "Delivery", "Testimonials", "Contact"]

    const handleContactsClick = useCallback(() => {
        setShowContacts(!showContacts);
        setShowCategories(false);
        setShowAbout(false)
    }, [showContacts])

    const handleCategoriesClick = useCallback(() => {
        setShowCategories(!showCategories);
        setShowContacts(false);
        setShowAbout(false)
    }, [showCategories])

    const handleAboutClick = useCallback(() => {
        setShowAbout(!showAbout);
        setShowCategories(false);
        setShowContacts(false);
    }, [showAbout])


    return (
        <section className="Footer">

            <p className="Footer__Text">© Copyright {(new Date()).getFullYear()}.<br/>All Rights Reserved.</p>

            {/* CONTACTS */}
            <div className="Footer__Option" onClick={handleContactsClick}>
                <p className="Footer__Option__Text">contact</p>
                <img className={`Footer__Option__Down ${!showContacts ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_down.svg" alt="down"/>
                <img className={`Footer__Option__Up ${showContacts ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_up.svg" alt="up"/>
            </div>

            <p className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}>
                Headquarters:<br/>
                5600, Blvd. des Galeries, Bur 530<br/>
                Québec, Québec G2K 2H6</p>

            <a className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}
               href="mailto:contact@osf-global.com">contact@osf-global.com</a>

            <a className={`Footer__Text ${showContacts ? "Element__Display" : "Element__Hide"}`}
               href="tel:+1-888-548-4344">+1 (888) 548-4344</a>
            {/* CONTACTS */}


            {/* CATEGORIES */}
            <div className="Footer__Option" onClick={handleCategoriesClick}>
                <p className="Footer__Option__Text">categories</p>
                <img className={`Footer__Option__Down ${!showCategories ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_down.svg" alt="down"/>
                <img className={`Footer__Option__Up ${showCategories ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_up.svg" alt="up"/>
            </div>

            {categories.map((element, index) => (
                <p key={index}
                   className={`Footer__Text ${showCategories ? "Element__Display" : "Element__Hide"}`}>{element}</p>))}
            {/* CATEGORIES */}


            {/* ABOUT */}
            <div className="Footer__Option" onClick={handleAboutClick}>
                <p className="Footer__Option__Text">about</p>
                <img className={`Footer__Option__Down ${!showAbout ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_down.svg" alt="down"/>
                <img className={`Footer__Option__Up ${showAbout ? "Element__Display" : "Element__Hide"}`}
                     src="./collapse_up.svg" alt="up"/>
            </div>

            {about.map((element, index) => (
                <p key={index}
                   className={`Footer__Text ${showAbout ? "Element__Display" : "Element__Hide"}`}>{element}</p>))}
            {/* ABOUT */}


            {/* LOGOS */}
            <div className="Footer__Logos">
                <a target="_blank" href="https://www.facebook.com">
                    <img className="Footer__Logos__Facebook" src="./facebook.svg" alt="Facebook"/></a>

                <a target="_blank" href="https://www.google.com">
                    <img className="Footer__Logos__Google" src="./google.svg" alt="Google"/></a>

                <a target="_blank" href="https://www.twitter.com">
                    <img className="Footer__Logos__Twitter" src="./twitter.svg" alt="Twitter"/></a>

                <a target="_blank" href="https://www.pinterest.com">
                    <img className="Footer__Logos__Pinterest" src="./pinterest.svg" alt="Pinterest"/></a>
            </div>
            {/* LOGOS */}

        </section>
    );
};

export default Footer;