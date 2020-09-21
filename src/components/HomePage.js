import React from "react";
import Header from "./elements/Header";
import Slider from "./elements/Slider";
import SummerSales from "./elements/SummerSales";
import PopularItems from "./elements/PopularItems";
import FullWidthImage from "./elements/FullWidthImage";
import Benefits from "./elements/Benefits";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import CookieModal from "./elements/CookieModal";

const HomePage = ({screenWidth}) => {

    return (
        <>
            <Header/>

            <Slider/>

            {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}
            <CookieModal/>
            {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}

            {/* NOT AVAILABLE IN MOBILE VERSION */}
            <SummerSales/>
            {/* NOT AVAILABLE IN MOBILE VERSION */}

            <PopularItems screenWidth={screenWidth}/>

            <FullWidthImage/>

            <Benefits/>

            <Footer/>

            {/* AT BOTTOM ONLY IN MOBILE VERSION */}
            <Fixed/>
            {/* AT BOTTOM ONLY IN MOBILE VERSION */}
        </>
    );
};

export default HomePage;