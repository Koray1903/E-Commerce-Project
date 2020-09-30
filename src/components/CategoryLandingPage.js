import React, {useCallback, useEffect, useState} from 'react';
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import DropdownFilters from "./elements/DropdownFilters";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/CategoryLandingPage.scss";
import {useSelector} from "react-redux";

const CategoryLandingPage = ({screenWidth}) => {

    // SCROLL TO TOP ON MOUNT
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // SCROLL TO TOP ON MOUNT

    // EXTRA LOADED PRODUCTS
    const PopularProducts = useSelector(state => state.shopReducer.PopularProducts);

    const [loadedProducts, setLoadedProducts] = useState(4);

    const handleLoadClick = useCallback(() => {
        setLoadedProducts(loadedProducts + 4);
    }, [loadedProducts]);
    // EXTRA LOADED PRODUCTS

    return (
        <section>
            <Header screenWidth={screenWidth}/>

            <div className="CategoryLandingPageBody">
                {/* NAVIGATION */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="breadcrumb-item" href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Category Landing Page</li>
                    </ol>
                </nav>
                {/* NAVIGATION */}

                <div className="CategoryLandingPage__Services">
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                    <p className="CategoryLandingPage__Services__Text">Services</p>
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                </div>

                {/* ONLY IN MOBILE VERSION */}
                <p className="HideFilter__Text">Hide Filter</p>
                {/* ONLY IN MOBILE VERSION */}

                <DropdownFilters/>

                <p className="CategoryLandingPage__ResultsText">12,931 results in apparel</p>

                {/* POPULAR ITEMS */}
                <div className="CategoryLandingPage__PopularItems">
                    {PopularProducts.slice(0, loadedProducts).map(product => (
                        <div className="CategoryLandingPage__PopularItems__SingleItem">
                            <img className="PopularItems__Image"
                                 src={product.productSrc}
                                 alt={product.productAlt}/>
                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">{product.productName}</p>
                                <p className="PopularItems__Info__Price">{product.productPrice}</p>
                            </div>
                        </div>))}
                </div>
                {/* POPULAR ITEMS */}

                {/* LOAD MORE BUTTON */}
                {loadedProducts !== PopularProducts.length ?
                    <div className="CategoryLandinPage__PopularItems__LoadMoreButton"
                         onClick={handleLoadClick}>
                        <button className="">LOAD MORE</button>
                    </div>
                    : null}
                {/* LOAD MORE BUTTON */}
            </div>

            <Footer screenWidth={screenWidth}/>

            {/* AT BOTTOM IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed/> : null}
            {/* AT BOTTOM IN MOBILE VERSION */}
        </section>
    );
};

export default CategoryLandingPage;