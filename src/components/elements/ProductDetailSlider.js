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
        slidesToShow: screenWidth > 697 ? 4 : 3,
        slidesToScroll: screenWidth > 697 ? 0 : 3,
        vertical: screenWidth > 697
    };

    return (
        <div className="ProductDetailSlider">

            <div className="ProductDetailSlider__Inner">
                <i className="fas fa-expand-arrows-alt ProductDetailSlider__Image__ExpandIcon"/>
                <img src={`../ProductDetailPage/${selectedThumbnail}.jpg`}
                     className="ProductDetailSlider__Image"
                     alt={selectedThumbnail}/>
            </div>

            <Slider className="ProductDetailSlider__Slider" {...settings}>

                {productThumbnails.map((element, index) =>
                    <>
                        <img className="ProductDetailSlider__Thumbnail"
                             src={`../ProductDetailPage/${element}_thumb.jpg`} alt={`Slide_${index}`} key={index}
                             onClick={() => setSelectedThumbnail(element)}/>
                        {/* !!! IGNORE - DUE TO A SLICK CAROUSEL BUG !!! */}
                        <div style={{color: "white"}}>""</div>
                        {/* !!! IGNORE - DUE TO A SLICK CAROUSEL BUG !!! */}
                    </>)}

            </Slider>

        </div>
    );
};

export default ProductDetailSlider;