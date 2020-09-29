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
import FeaturedProducts from "./elements/FeaturedProducts";
import "../style/HomePage.scss";

const HomePage = ({screenWidth}) => {

    return (
        <section>
            <Header screenWidth={screenWidth}/>

            <div className="SliderSummerSalesBackground"> {/* ADD CSS LATER */}
                <Slider/>

                {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}
                {/*<CookieModal/>*/}
                {/* COOKIE MODAL - APPEARS AFTER 10 SECONDS */}

                {/* NOT AVAILABLE IN MOBILE VERSION */}
                {screenWidth > 767 ? <SummerSales/> : null}
                {/* NOT AVAILABLE IN MOBILE VERSION */}
            </div>

            <div className="PopularItemsBackground">
                <PopularItems screenWidth={screenWidth}/>
            </div>

            <FullWidthImage/>

            {/* NOT AVAILABLE IN MOBILE VERSION */}
            {screenWidth > 767 ? <FeaturedProducts/> : null}
            {/* NOT AVAILABLE IN MOBILE VERSION */}

            <Benefits/>

            <Footer screenWidth={screenWidth}/>

            {/* AT BOTTOM IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed/> : null}
            {/* AT BOTTOM IN MOBILE VERSION */}
        </section>
    );
};

export default HomePage;