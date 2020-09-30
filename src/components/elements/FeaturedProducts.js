import React, {useEffect, useState} from "react";
import "../../style/FeaturedProducts.scss";
import {useSelector, useDispatch} from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FeaturedProducts = () => {

    const PopularProducts = useSelector(state => state.shopReducer.PopularProducts);

    return (
        <section className="FeaturedProducts">

            <p className="FeaturedProducts__Title">featured products</p>
            <p className="FeaturedProducts__Description">Under omnis iste natus error sit voluptatem</p>

            <div className="FeaturedProducts__Divider">
                <button className="FeaturedProducts__Divider__PreviousButton">
                    <i className="fas fa-chevron-left"/>
                    <button className="slick-arrow slick-prev"/>
                </button>

                <div className="FeaturedProducts__Divider__HorizontalLine"/>
                <p className="FeaturedProducts__Divider__Toggle">///</p>
                <div className="FeaturedProducts__Divider__HorizontalLine"/>

                <button className="FeaturedProducts__Divider__NextButton">
                    <i className="fas fa-chevron-right"/>
                </button>

            </div>

            <div className="FeaturedProducts__Slider">


                <OwlCarousel
                    className="owl-theme FeaturedProducts__Slider"
                    loop
                    margin={10}
                    items="4"
                    nav>

                    {PopularProducts ?
                        PopularProducts.map(element => (
                        <div class="item">
                            <img src={element.productSrc} className="FeaturedProducts__Slider__Thumbnail"/>
                        </div>
                    )) : null}
                </OwlCarousel>


            </div>

        </section>
    );
};

export default FeaturedProducts;