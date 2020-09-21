import React, {useState} from "react";
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/Slider.scss"

const Slider = () => {

    // CAROUSEL
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // CAROUSEL

    const backgroundImageLinks = ["./slider/home-slider-1.png", "./slider/home-slider-2.png", "./slider/home-slider-3.png"]

    return (
        <section className="Slider">

            <Carousel activeIndex={index} onSelect={handleSelect} className="Slider__Carousel">

                {backgroundImageLinks.map(imageLink => (

                    <Carousel.Item className="SliderItems__SingleItem"
                                   style={{
                                       backgroundImage: `url(${imageLink})`,
                                       backgroundSize: "cover",
                                       borderRadius: "16px",
                                       backgroundPosition: "right center"
                                   }}>

                        <div className="SliderItems__Info">
                            <p className="SliderItems__Info__Title">Control and manage any device with cloud
                                solutions</p>
                            <p className="SliderItems__Info__Text">Improve business performance and the user experience
                                with the right mix of IoT technology and processes
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas
                                sit aspernatur aut odit aut fugit, sed</p>

                            {/* REDIRECT TO ANOTHER PAGE */}
                            <button className="SliderItems__Info__Button">view more</button>
                            {/* REDIRECT TO ANOTHER PAGE */}
                        </div>

                    </Carousel.Item>))}

            </Carousel>

        </section>
    );
};

export default Slider;