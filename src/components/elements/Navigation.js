import React, {useCallback, useState} from 'react';
import "../../style/Navigation.scss";
import {Link} from 'react-router-dom';

const Navigation = ({screenWidth}) => {

    const [showServices, setShowServices] = useState(false);
    const [showProductCategories, setShowProductCategories] = useState(false);
    const [showSale, setShowSale] = useState(false);

    const productCategories = ["Accessories", "Alcohol", "Art", "Books", "Drink", "Electronics", "Flowers & Plants",
        "Food", "Gadgets", "Garden", "Grocery", "Home", "Jewelry", "Kids & Baby", "Men's Fashion", "Mobile", "Motorcycles",
        "Movies", "Music", "Office", "Pets", "Romantic", "Sport", "Toys"];

    const sale = ["Accessories", "Alcohol", "Art", "Books", "Drink", "Electronics", "Flowers & Plants", "Food"];


    const handleServicesClick = useCallback(() => {
        setShowServices(!showServices);
    }, [showServices]);

    const handleProductCategoriesClick = useCallback(() => {
        setShowProductCategories(!showProductCategories);
        setShowSale(false);
    }, [showProductCategories]);

    const handleSaleClick = useCallback(() => {
        setShowSale(!showSale);
        setShowProductCategories(false);
    }, [showSale]);


    return (
        <section className="Navigation">

            {/* OUTER NAVIGATION */}
            <div className="Navigation__Option__Outer Navigation__Option__Outer__OnHover" onClick={handleServicesClick}>
                <p className="Navigation__Option__Outer__Text">services</p>

                {!showServices ?
                    <i className="fas fa-caret-down Navigation__Option__Down"/>
                    :
                    <i className="fas fa-caret-up Navigation__Option__Up"/>
                }
            </div>
            {/* OUTER NAVIGATION */}


            {/* INNER NAVIGATION */}
            {screenWidth < 768 ? // MOBILE VERSION
                <>
                    {showServices ?
                        <div onClick={handleProductCategoriesClick}>
                            <div className="Navigation__Option__Inner">
                                <p className="Navigation__Option__Inner__Text">product categories</p>
                                {!showProductCategories ?
                                    <i className="fas fa-caret-down Navigation__Option__Down"/>
                                    :
                                    <i className="fas fa-caret-up Navigation__Option__Up"/>
                                }
                                {/*<i className={`fas fa-caret-down Navigation__Option__Down ${!showProductCategories ? "Element__Display" : "Element__Hide"}`}/>*/}
                                {/*<i className={`fas fa-caret-up Navigation__Option__Up ${showProductCategories ? "Element__Display" : "Element__Hide"}`}/>*/}
                            </div>

                            <div
                                className={`Navigation__Option__Inner__Categories ${showProductCategories ? "Element__Display" : "Element__Hide"}`}>
                                {productCategories.map(element =>
                                    <Link to="/404">
                                        <p className="Navigation__Option__Inner__Categories__Link">{element}</p>
                                    </Link>)}
                            </div>
                        </div>
                        : null}

                    {showServices ?
                        <div onClick={handleSaleClick}>
                            <div className="Navigation__Option__Inner">
                                <p className="Navigation__Option__Inner__Text">sale</p>
                                {!showSale ?
                                    <i className="fas fa-caret-down Navigation__Option__Down"/>
                                    :
                                    <i className="fas fa-caret-up Navigation__Option__Up"/>
                                }
                                {/*<i className={`fas fa-caret-down Navigation__Option__Down ${!showSale ? "Element__Display" : "Element__Hide"}`}/>*/}
                                {/*<i className={`fas fa-caret-up Navigation__Option__Up ${showSale ? "Element__Display" : "Element__Hide"}`}/>*/}
                            </div>

                            <div
                                className={`Navigation__Option__Inner__Categories ${showSale ? "Element__Display" : "Element__Hide"}`}>
                                {sale.map(element =>
                                    <Link to="/404">
                                        <p className="Navigation__Option__Inner__Categories__Link">{element}</p>
                                    </Link>)}
                            </div>
                        </div>
                        : null}
                </> // MOBILE VERSION
                :
                <>
                    {showServices ? // TABLET & DESKTOP VERSION
                        <div className="Navigation__Option__Inner">

                            <div className="Navigation__Option__Inner__ProductCategories">
                                <p className="Navigation__Option__Inner__ProductCategories__Title">
                                    product categories
                                </p>
                                <div
                                    className={`Navigation__Option__Inner__ProductCategories__Categories ${showServices ? "Element__Display" : "Element__Hide"}`}>
                                    {productCategories.map(element =>
                                        <Link className="Navigation__Option__Inner__ProductCategories__Categories__Category" to="/404">
                                            <p>{element}</p>
                                        </Link>)}
                                </div>
                            </div>

                            <div className="Navigation__Option__Inner__Sale">
                                <p className="Navigation__Option__Inner__Sale__Title">
                                    sale
                                </p>
                                <div
                                    className={`Navigation__Option__Inner__Sale__Categories ${showServices ? "Element__Display" : "Element__Hide"}`}>
                                    {sale.map(element =>
                                        <Link className="Navigation__Option__Inner__Sale__Categories__Category" to="/404">
                                            <p>{element}</p>
                                        </Link>)}
                                </div>
                            </div>

                            <img className="Navigation__Image" src="./navigation/shopping_image.png"
                                 alt="shopping_girl"/>
                        </div>
                        : null}
                </> // TABLET & DESKTOP VERSION
            }
            {/* INNER NAVIGATION */}


            {/* OUTER NAVIGATION */}
            <div className="Navigation__Option__Outer Navigation__Option__Outer__OnHover">
                <p className="Navigation__Option__Outer__Text">company</p>
            </div>

            <div className="Navigation__Option__Outer Navigation__Option__Outer__OnHover">
                <p className="Navigation__Option__Outer__Text">library</p>
            </div>

            <div className="Navigation__Option__Outer Navigation__Option__Outer__OnHover">
                <p className="Navigation__Option__Outer__Text">contact us</p>
            </div>
            {/* OUTER NAVIGATION */}


            {screenWidth < 768 ? // IN MOBILE VERSION
                <img className="Navigation__Image" src="./navigation/shopping_image.png" alt="shopping_girl"/>
                : null}
        </section>
    );
};

export default Navigation;