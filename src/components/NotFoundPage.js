import React from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import NotFoundBody from "./elements/NotFoundBody";

const NotFoundPage = ({screenWidth}) => {

    return (
        <section>
            <Header screenWidth={screenWidth}/>

            <NotFoundBody/>

            <Footer screenWidth={screenWidth}/>

            {/* ONLY IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed screenWidth={screenWidth}/> : null}
            {/* ONLY IN MOBILE VERSION */}
        </section>
    );
};

export default NotFoundPage;