import React, {useEffect} from "react";
import Header from "./elements/Header";
import Slider from "./elements/Slider";
import SummerSales from "./elements/SummerSales";
import PopularItems from "./elements/PopularItems";
import FullWidthImage from "./elements/FullWidthImage";
import Benefits from "./elements/Benefits";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import CookieModal from "./elements/CookieModal";
import FeaturedProducts from "./elements/FeaturedProducts";
import "../style/HomePage.scss";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from "../redux/actions.js";

const HomePage = ({screenWidth}) => {

    const dispatch = useDispatch();
    const areCookiesEnabled = useSelector(state => state.shopReducer.areCookiesEnabled);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    // SCROLL TO TOP ON MOUNT
    useEffect(() => window.scrollTo(0, 0), []);
    // SCROLL TO TOP ON MOUNT

    return (
        <section className="HomePage">
            <Header screenWidth={screenWidth}/>

            <div className="SliderSummerSalesBackground">
                <Slider/>

                {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}
                {!areCookiesEnabled ? <CookieModal/> : null}
                {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}

                {/* ONLY IN TABLET & DESKTOP VERSIONS */}
                <SummerSales/>
                {/* ONLY IN TABLET & DESKTOP VERSIONS */}
            </div>

            <div className="HomePagePopularItemsBackground">
                <PopularItems screenWidth={screenWidth}/>
            </div>

            <FullWidthImage/>

            {/* ONLY IN TABLET & DESKTOP VERSIONS */}
            <FeaturedProducts/>
            {/* ONLY IN TABLET & DESKTOP VERSIONS */}

            <Benefits/>

            <Footer screenWidth={screenWidth}/>

            {/* AT BOTTOM IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed/> : null}
            {/* AT BOTTOM IN MOBILE VERSION */}
        </section>
    );
};

export default HomePage;