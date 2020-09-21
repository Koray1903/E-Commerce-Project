import React from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import NotFoundBody from "./elements/NotFoundBody";

const NotFoundPage = () => {

    return (
        <>
            <Header/>

            <NotFoundBody/>

            <Footer/>

            <Fixed/>
        </>
    );
};

export default NotFoundPage;