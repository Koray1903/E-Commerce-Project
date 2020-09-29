import React from "react";
import "../../style/FeaturedProducts.scss";

const FeaturedProducts = () => {

    return (
        <section className="FeaturedProductsBackground">

            <p className="FeaturedProducts__Title">featured products</p>
            <p className="FeaturedProducts__Description">Under omnis iste natus error sit voluptatem</p>

            <div className="FeaturedProducts__Divider">
                <button className="FeaturedProducts__Divider__PreviousButton" disabled={true}>
                    <i className="fas fa-chevron-left"/>
                </button>

                <div className="FeaturedProducts__Divider__HorizontalLine"/>
                <p className="FeaturedProducts__Divider__Toggle">///</p>
                <div className="FeaturedProducts__Divider__HorizontalLine"/>

                <button className="FeaturedProducts__Divider__NextButton" disabled={true}>
                    <i className="fas fa-chevron-right"/>
                </button>
            </div>

            <div className="">
                {/* PRODUCT TILE */}
            </div>

        </section>
    );
};

export default FeaturedProducts;