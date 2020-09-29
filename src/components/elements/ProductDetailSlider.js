import React, {useState} from "react";
import Slider from "react-slick";
import "../../style/ProductDetailSlider.scss";


const ProductDetailSlider = ({screenWidth}) => {

    const productThumbnails = ["Slide_1", "Slide_2", "Slide_3", "Slide_4"];
    const [selectedThumbnail, setSelectedThumbnail] = useState(productThumbnails[0]);

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: screenWidth > 697 ? 3 : 3,
        slidesToScroll: screenWidth > 697 ? 1 : 3,
        vertical: screenWidth > 697,
        // vertical: screenWidth > 697,
        verticalSwiping: screenWidth > 697,
    };

    return (
        <div className="ProductDetailSlider">
            <img src={`../ProductDetailPage/${selectedThumbnail}.jpg`}
                 className="ProductDetailSlider__Image"
                 alt={selectedThumbnail}/>

            <Slider className="ProductDetailSlider__Slider" {...settings}>

                {productThumbnails.map((element, index) =>
                    <div className="flexColumnClass">
                        <img className="ProductDetailSlider__Thumbnail"
                             src={`../ProductDetailPage/${element}_thumb.jpg`} alt={`Slide_${index}`} key={index}
                             onClick={() => setSelectedThumbnail(element)}/>
                        {/* IGNORE - DUE TO SLICK CAROUSEL BUG */}
                        <div style={{color: "white"}}>""</div>
                        {/* IGNORE - DUE TO SLICK CAROUSEL BUG */}
                    </div>)}

            </Slider>


        </div>
    );
};

export default ProductDetailSlider;