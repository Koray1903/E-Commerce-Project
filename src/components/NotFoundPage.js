import React, {useEffect} from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import NotFoundBody from "./elements/NotFoundBody";

const NotFoundPage = ({screenWidth}) => {

    // SCROLL TO TOP ON MOUNT
    useEffect(() => window.scrollTo(0, 0), []);
    // SCROLL TO TOP ON MOUNT

    return (
        <section>
            <Header screenWidth={screenWidth}/>

            <NotFoundBody/>

            <Footer screenWidth={screenWidth}/>

            {/* AT BOTTOM IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed/> : null}
            {/* AT BOTTOM IN MOBILE VERSION */}
        </section>
    );
};

export default NotFoundPage;