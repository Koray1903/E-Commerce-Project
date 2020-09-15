import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Slider.scss"

const Slider = () => {

    // CAROUSEL
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // CAROUSEL

    return (
        <section className="Slider">

            <Carousel activeIndex={index} onSelect={handleSelect} className="Slider__Carousel">

                {/* SLIDE ONE */}
                <Carousel.Item className="SliderItems__SingleItem">
                    <img className="SliderItems__Image"
                         src="./slider/home-slider-1.png"
                         alt="First slide"/>

                    <div className="SliderItems__Info">
                        <p className="SliderItems__Info__Title">Control and manage any device with cloud solutions</p>
                        <p className="SliderItems__Info__Text">Improve business performance and the user experience
                            with the right mix of IoT technology and processes
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed</p>
                        <button className="SliderItems__Info__Button">view more</button>
                    </div>

                </Carousel.Item>
                {/* SLIDE ONE */}

                {/* SLIDE TWO */}
                <Carousel.Item>
                    <img className="SliderItems__Image"
                         src="./slider/home-slider-2.png"
                         alt="Second slide"/>

                    <div className="SliderItems__Info">
                        <p className="SliderItems__Info__Title">Control and manage any device with cloud solutions</p>
                        <p className="SliderItems__Info__Text">Improve business performance and the user experience
                            with the right mix of IoT technology and processes
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed</p>
                        <button className="SliderItems__Info__Button">view more</button>
                    </div>

                </Carousel.Item>
                {/* SLIDE TWO */}

                {/* SLIDE THREE */}
                <Carousel.Item>
                    <img className="SliderItems__Image"
                         src="./slider/home-slider-3.png"
                         alt="Third slide"/>

                    <div className="SliderItems__Info">
                        <p className="SliderItems__Info__Title">Control and manage any device with cloud solutions</p>
                        <p className="SliderItems__Info__Text">Improve business performance and the user experience
                            with the right mix of IoT technology and processes
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed</p>
                        <button className="SliderItems__Info__Button">view more</button>
                    </div>

                </Carousel.Item>
                {/* SLIDE THREE */}

            </Carousel>

        </section>
    );
};

export default Slider;