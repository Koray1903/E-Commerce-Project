import React from "react";
import Header from "./elements/Header";
import Slider from "./elements/Slider";
import SummerSales from "./elements/SummerSales";
import PopularItems from "./elements/PopularItems";
import FullWidthImage from "./elements/FullWidthImage";
import Benefits from "./elements/Benefits";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";

const HomePage = () => {

    return (
        <>
            <Header/>
            <Slider/>

            {/* NOT IN MOBILE VERSION */}
            <SummerSales/>
            {/* NOT IN MOBILE VERSION */}

            <PopularItems/>
            <FullWidthImage/>
            <Benefits/>
            <Footer/>

            {/* LATER */}
            <Fixed/>
            {/* LATER */}
        </>
    );
};

export default HomePage;