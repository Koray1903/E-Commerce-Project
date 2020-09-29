import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/PopularItems.scss";

const PopularItems = ({screenWidth}) => {

    // CAROUSEL
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // CAROUSEL

    // FOR PRODUCT TWO
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    // FOR PRODUCT TWO

    return (
        <section className="PopularItems">

            <div className="PopularItems__Title">
                <div className="PopularItems__Title__HorizontalLine"/>
                <p className="PopularItems__Title__Text">Popular Items</p>
                <div className="PopularItems__Title__HorizontalLine"/>
            </div>

            {/*NO CAROUSEL IN DESKTOP VERSION*/}
            {/*LOAD MORE BUTTON IN DESKTOP VERSION*/}

            {/* MOBILE */}
            {screenWidth < 768 ?
                <Carousel activeIndex={index} onSelect={handleSelect} className="PopularItems__Carousel">
                    {/* PRODUCT ONE */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-1.png"
                             alt="First slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Kristina Dam Oak Table With White<br/> Marble
                                Top</p>
                            <p className="PopularItems__Info__Price">$ 799.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT ONE */}

                    {/* PRODUCT TWO - BUY NOW BUTTON */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <Link to="/pdp">
                            <img className="PopularItems__Image"
                                 src="./PopularItems/popular-item-2.png"
                                 alt="Second slide"/>
                        </Link>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                            <div className="PopularItems__Info__Extra">
                                <p className="PopularItems__Info__Extra__Price">$ 659.55</p>
                                <button
                                    className={`${purchaseStatus ? `PopularItems__Info__Extra__BuyNow__Disabled` : `PopularItems__Info__Extra__BuyNow__Enabled`}`}
                                    onClick={() => setPurchaseStatus(!purchaseStatus)}
                                    disabled={purchaseStatus} // REDUX
                                >buy now
                                </button>
                            </div>

                        </div>

                    </Carousel.Item>
                    {/* PRODUCT TWO - BUY NOW BUTTON */}

                    {/* PRODUCT THREE */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-3.png"
                             alt="Third slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Activate Facial Mask and<br/> Charcoal Soap </p>
                            <p className="PopularItems__Info__Price">$ 129.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT THREE */}

                    {/* PRODUCT FOUR */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-4.png"
                             alt="Fourth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Cocktail Table Walnut<br/> | YES</p>
                            <p className="PopularItems__Info__Price">$ 299.99</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT FOUR */}

                    {/* PRODUCT FIVE */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-5.png"
                             alt="Fifth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                            <p className="PopularItems__Info__Price">$ 659.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT FIVE */}

                    {/* PRODUCT SIX */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-6.png"
                             alt="Sixth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">TORY DESK CALENDAR</p>
                            <p className="PopularItems__Info__Price">$ 410.99</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT SIX */}

                    {/* PRODUCT SEVEN */}
                    <Carousel.Item className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-7.png"
                             alt="Seventh slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">CH445 Wing Chair on<br/> SUITE NY</p>
                            <p className="PopularItems__Info__Price">$ 330.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* PRODUCT SEVEN */}

                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}
                    <Carousel.Item className="PopularItems__SingleItem__Static">

                        <img className="PopularItems__SingleItem__Static__Image"
                             src="./PopularItems/popular-item-8.png"
                             alt="Eight slide"/>

                        <div className="PopularItems__SingleItem__Static__Gradient">
                            <p className="PopularItems__SingleItem__Static__Gradient__Text">
                                My dragons are
                                misbehaving again.
                                Unbelieveable!</p>
                            <div className="PopularItems__SingleItem__Static__Gradient__Comment">
                                <img className="PopularItems__SingleItem__Static__Gradient__Comment__Icon"
                                     src="./PopularItems/comment.png" alt="comment"/>
                                <p className="PopularItems__SingleItem__Static__Gradient__Comment__Text">5h ago</p>
                            </div>
                        </div>

                    </Carousel.Item>
                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}

                </Carousel>
                : null}
            {/* MOBILE */}


            {/* TABLET & DESKTOP */}
            {screenWidth > 767 ?
                <section className="PopularItems__Carousel">
                    {/* PRODUCT ONE */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-1.png"
                             alt="First slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Kristina Dam Oak Table With White<br/> Marble
                                Top</p>
                            <p className="PopularItems__Info__Price">$ 799.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT ONE */}

                    {/* PRODUCT TWO - BUY NOW BUTTON */}
                    <div className="PopularItems__SingleItem">
                        <Link to="/pdp">
                            <img className="PopularItems__Image"
                                 src="./PopularItems/popular-item-2.png"
                                 alt="Second slide"/>
                        </Link>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                            <div className="PopularItems__Info__Extra">
                                <p className="PopularItems__Info__Extra__Price">$ 659.55</p>
                                <button
                                    className={`${purchaseStatus ? `PopularItems__Info__Extra__BuyNow__Disabled` : `PopularItems__Info__Extra__BuyNow__Enabled`}`}
                                    onClick={() => setPurchaseStatus(!purchaseStatus)}
                                    disabled={purchaseStatus} // REDUX
                                >buy now
                                </button>
                            </div>

                        </div>

                    </div>
                    {/* PRODUCT TWO - BUY NOW BUTTON */}

                    {/* PRODUCT THREE */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-3.png"
                             alt="Third slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Activate Facial Mask and<br/> Charcoal Soap </p>
                            <p className="PopularItems__Info__Price">$ 129.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT THREE */}

                    {/* PRODUCT FOUR */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-4.png"
                             alt="Fourth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Cocktail Table Walnut<br/> | YES</p>
                            <p className="PopularItems__Info__Price">$ 299.99</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT FOUR */}

                    {/* PRODUCT FIVE */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-5.png"
                             alt="Fifth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                            <p className="PopularItems__Info__Price">$ 659.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT FIVE */}

                    {/* PRODUCT SIX */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-6.png"
                             alt="Sixth slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">TORY DESK CALENDAR</p>
                            <p className="PopularItems__Info__Price">$ 410.99</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT SIX */}

                    {/* PRODUCT SEVEN */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-7.png"
                             alt="Seventh slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">CH445 Wing Chair on<br/> SUITE NY</p>
                            <p className="PopularItems__Info__Price">$ 330.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/cart.svg" alt="cart"/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__Background">
                                <img className="PopularItems__SingleItem__OnHover__Icon"
                                     onClick={() => {}} // REDUX
                                     src="./PopularItems/favorite.svg" alt="favorite"/>
                            </div>
                        </div>
                    </div>
                    {/* PRODUCT SEVEN */}

                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}
                    <div className="PopularItems__SingleItem__Static">

                        <img className="PopularItems__SingleItem__Static__Image"
                             src="./PopularItems/popular-item-8.png"
                             alt="Eight slide"/>

                        <div className="PopularItems__SingleItem__Static__Gradient">
                            <p className="PopularItems__SingleItem__Static__Gradient__Text">
                                My dragons are
                                misbehaving again.
                                Unbelieveable!</p>
                            <div className="PopularItems__SingleItem__Static__Gradient__Comment">
                                <img className="PopularItems__SingleItem__Static__Gradient__Comment__Icon"
                                     src="./PopularItems/comment.png" alt="comment"/>
                                <p className="PopularItems__SingleItem__Static__Gradient__Comment__Text">5h ago</p>
                            </div>
                        </div>

                    </div>
                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}

                </section>
                : null}
            {/* TABLET & DESKTOP */}

        </section>
    );
};

export default PopularItems;