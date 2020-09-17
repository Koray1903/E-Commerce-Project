import React, {useCallback, useState} from 'react';
import "../../style/Navigation.scss"

const Navigation = () => {

    const [showServices, setShowServices] = useState(false);
    const [showProductCategories, setShowProductCategories] = useState(false);
    const [showSale, setShowSale] = useState(false);

    const productCategories = ["Accessories", "Alcohol", "Art", "Books", "Drink", "Electronics", "Flowers & Plants",
        "Food", "Gadgets", "Garden", "Grocery", "Home", "Jewelry", "Kids & Baby", "Men's Fashion", "Mobile", "Motorcycles",
        "Movies", "Music", "Office", "Pets", "Romantic", "Sport", "Toys"];

    const sale = ["Accessories", "Alcohol", "Art", "Books", "Drink", "Electronics", "Flowers & Plants", "Food"];


    const handleServicesClick = useCallback(() => {
        setShowServices(!showServices);
    }, [showServices])

    const handleProductCategoriesClick = useCallback(() => {
        setShowProductCategories(!showProductCategories);
        setShowSale(false);
    }, [showProductCategories])

    const handleSaleClick = useCallback(() => {
        setShowSale(!showSale);
        setShowProductCategories(false);
    }, [showSale])


    return (
        <section className="Navigation">

            {/* OUTER NAVIGATION */}
            <div className="Navigation__Option__Outer" onClick={handleServicesClick}>
                <p className="Navigation__Option__Outer__Text">services</p>
                <img className={`Navigation__Option__Down ${!showServices ? "Element__Display" : "Element__Hide"}`}
                     src="../navigation/navigation_collapse_down.svg" alt="down"/>
                <img className={`Navigation__Option__Up ${showServices ? "Element__Display" : "Element__Hide"}`}
                     src="../navigation/navigation_collapse_up.svg" alt="up"/>
            </div>
            {/* OUTER NAVIGATION */}


            {/* INNER NAVIGATION */}
            {showServices ?
                <div onClick={handleProductCategoriesClick}>
                    <div className="Navigation__Option__Inner">
                        <p className="Navigation__Option__Inner__Text">product categories</p>
                        <img
                            className={`Navigation__Option__Down ${!showProductCategories ? "Element__Display" : "Element__Hide"}`}
                            src="../navigation/navigation_collapse_down.svg" alt="down"/>
                        <img
                            className={`Navigation__Option__Up ${showProductCategories ? "Element__Display" : "Element__Hide"}`}
                            src="../navigation/navigation_collapse_up.svg" alt="up"/>
                    </div>

                    <div
                        className={`Navigation__Option__Inner__Categories ${showProductCategories ? "Element__Display" : "Element__Hide"}`}>
                        {productCategories.map(element => (<p>{element}</p>))}
                    </div>
                </div>
                : null}

            {showServices ?
                <div onClick={handleSaleClick}>
                    <div className="Navigation__Option__Inner">
                        <p className="Navigation__Option__Inner__Text">sale</p>
                        <img className={`Navigation__Option__Down ${!showSale ? "Element__Display" : "Element__Hide"}`}
                             src="../navigation/navigation_collapse_down.svg" alt="down"/>
                        <img className={`Navigation__Option__Up ${showSale ? "Element__Display" : "Element__Hide"}`}
                             src="../navigation/navigation_collapse_up.svg" alt="up"/>
                    </div>

                    <div
                        className={`Navigation__Option__Inner__Categories ${showSale ? "Element__Display" : "Element__Hide"}`}>
                        {sale.map(element => (<p>{element}</p>))}
                    </div>
                </div>
                : null}
            {/* INNER NAVIGATION */}


            {/* OUTER NAVIGATION */}
            <div className="Navigation__Option__Outer">
                <p className="Navigation__Option__Outer__Text">company</p>
            </div>

            <div className="Navigation__Option__Outer">
                <p className="Navigation__Option__Outer__Text">library</p>
            </div>

            <div className="Navigation__Option__Outer">
                <p className="Navigation__Option__Outer__Text">contact us</p>
            </div>
            {/* OUTER NAVIGATION */}

            <img className="Navigation__Image" src="./navigation/shopping_image.png" alt="shopping_girl"/>
        </section>
    );
};

export default Navigation;