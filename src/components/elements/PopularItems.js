import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/PopularItems.scss"

const PopularItems = ({screenWidth}) => {

    // CAROUSEL
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // CAROUSEL

    return (
        <section className="PopularItems">

            <div className="PopularItems__Title">
                <div className="PopularItems__Title__HorizontalLine"/>
                <p className="PopularItems__Title__Text">Popular Items</p>
                <div className="PopularItems__Title__HorizontalLine"/>
            </div>

            {/* MOBILE */}
            {screenWidth <= 767 ?
                <section>
                    <Carousel activeIndex={index} onSelect={handleSelect} className="PopularItems__Carousel">
                        {/* PRODUCT ONE */}
                        <Carousel.Item className="PopularItems__SingleItem">
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-1.png"
                                 alt="First slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">Kristina Dam Oak Table With White<br/> Marble
                                    Top</p>
                                <p className="PopularItems__Info__Price">$ 799.55</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT ONE */}

                        {/* PRODUCT TWO - EDIT LATER */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-2.png"
                                 alt="Second slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                                <p className="PopularItems__Info__Price">$ 659.55</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT TWO - EDIT LATER */}

                        {/* PRODUCT THREE  - EDIT LATER */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-3.png"
                                 alt="Third slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">Activate Facial Mask and<br/> Charcoal Soap </p>
                                <p className="PopularItems__Info__Price">$ 129.55</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT THREE  - EDIT LATER */}

                        {/* PRODUCT FOUR */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-4.png"
                                 alt="Fourth slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">Cocktail Table Walnut<br/> | YES</p>
                                <p className="PopularItems__Info__Price">$ 299.99</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT FOUR */}

                        {/* PRODUCT FIVE */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-5.png"
                                 alt="Fifth slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">Hay - About A Lounge<br/> Chair AAL 93</p>
                                <p className="PopularItems__Info__Price">$ 659.55</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT FIVE */}

                        {/* PRODUCT SIX */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-6.png"
                                 alt="Sixth slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">TORY DESK CALENDAR</p>
                                <p className="PopularItems__Info__Price">$ 410.99</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT SIX */}

                        {/* PRODUCT SEVEN */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-7.png"
                                 alt="Seventh slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">CH445 Wing Chair on<br/> SUITE NY</p>
                                <p className="PopularItems__Info__Price">$ 330.55</p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT SEVEN */}

                        {/* PRODUCT EIGHT - EDIT LATER */}
                        <Carousel.Item>
                            <img className="PopularItems__Image"
                                 src="./popular_items/popular-item-8.png"
                                 alt="Eight slide"/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name"></p>
                                <p className="PopularItems__Info__Price"></p>
                            </div>

                        </Carousel.Item>
                        {/* PRODUCT EIGHT - EDIT LATER */}

                    </Carousel>

                </section>
                : null}
            {/* MOBILE */}


            {/* TABLET & DESKTOP - EDIT LATER */}
            {screenWidth > 767 ? <div>example</div> : null}
            {/* TABLET & DESKTOP - EDIT LATER */}

        </section>
    );
};

export default PopularItems;