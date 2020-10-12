import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from 'react-router-dom';
import "../../style/Slider.scss";

const Slider = () => {

    const backgroundImageLinks = ["./slider/home-slider-1.png", "./slider/home-slider-2.png", "./slider/home-slider-3.png"];

    return (
        <section className="Slider">

            <OwlCarousel
                className="owl-theme Slider__Carousel"
                loop
                margin={25}
                items="1"
                nav={false}>

                {backgroundImageLinks.map(imageLink => (

                    <div className="SliderItems__SingleItem"
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
                                with the right mix of IoT technology and processes doloremque laudantium, totam rem
                                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed</p>

                            <Link to="/clp">
                                <button className="SliderItems__Info__Button">view more</button>
                            </Link>
                        </div>

                    </div>))}
            </OwlCarousel>

        </section>
    );
};

export default Slider;