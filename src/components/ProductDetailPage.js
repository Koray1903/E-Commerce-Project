import React, {useState, useCallback} from "react";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import ProductDetailSlider from "./elements/ProductDetailSlider";
import SocialNetworkLogos from "./elements/SocialNetworkLogos";
import PopularItems from "./elements/PopularItems";
import Benefits from "./elements/Benefits";
import ProductDetailTabs from "./elements/ProductDetailTabs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ProductDetailPage.scss";

const ProductDetailPage = ({screenWidth}) => {

    const [amount, setAmount] = useState(1);
    const price = 299.99;

    const handleIncrease = useCallback(() => {
        setAmount(amount + 1);
    }, [amount]);

    const handleDecrease = useCallback(() => {
        if (amount > 1) {
            setAmount(amount - 1);
        } else {
            return null;
        }
    }, [amount]);

    const handleChange = (event) => {
        let assignedAmount = parseInt(event.target.value);

        if (assignedAmount > 1) {
            setAmount(assignedAmount);
        } else {
            setAmount(1);
        }
    };

    const colorArray = [
        {color: "Green", code: "#007f00"},
        {color: "Blue", code: "#002a7f"},
        {color: "Dark Gray", code: "#3f4041"},
        {color: "Red", code: "#e50f0f"},
        {color: "Light Blue", code: "#1eb7d2"}
    ];

    return (
        <>
            <Header screenWidth={screenWidth}/>

            <section className="ProductDetailPage">

                {/* NAVIGATION */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/" className="breadcrumb-item">Home</a></li>
                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-item">Product Detail Page</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Ruffle Front V-Neck Cardigan</li>
                    </ol>
                </nav>
                {/* NAVIGATION */}

                <div className="ProductDetailPage__Product">
                    <div className="ProductDetailPage__Product__HorizontalLine"/>
                    <p className="ProductDetailPage__Product__Text">V-Neck Cardigan</p>
                    <div className="ProductDetailPage__Product__HorizontalLine"/>
                </div>


                <div className="ProductDetailPage__Body__Outer">

                    <ProductDetailSlider screenWidth={screenWidth}/>

                    <div className="ProductDetailPage__Body__Inner">
                        <p className="ProductDetailPage__Body__Inner__Price">$ {(price * amount).toFixed(2)}</p>

                        <select className="ProductDetailPage__Body__Inner__ColorFilter">
                            {/* ADD COLOR CIRCLES LATER */}
                            {colorArray.map((element, index) => (
                                <option value={element.color} key={index}>{element.color}</option>
                            ))}
                        </select>

                        {/* TO REDUX */}
                        <div className="ProductDetailPage__Body__Inner__Amount">
                            <i className="fas fa-minus" onClick={handleDecrease}/>
                            <input type="text" value={amount}
                                   className="ProductDetailPage__Body__Inner__Amount__Input"
                                   onChange={(event) => handleChange(event)}/>
                            <i className="fas fa-plus" onClick={handleIncrease}/>
                        </div>

                        <button className="ProductDetailPage__Body__Inner__AddToCart">add to cart</button>
                        {/* TO REDUX */}

                        <p className="ProductDetailPage__Body__Inner__Description">Sed ut perspiciatis unde omnis iste
                            natus
                            error
                            sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas

                            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem
                            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                            aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                            qui
                            in
                            ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                            quo
                            voluptas nulla pariatur?</p>

                        <p className="ProductDetailPage__Body__Inner__ReadMore">Read more</p>

                        <div className="ProductDetailPage__Body__Inner__ShareLogos">
                            <p className="ProductDetailPage__Body__Inner__ShareLogos__Text">Share</p>
                            <SocialNetworkLogos className="ProductDetailPage__Body__Inner__ShareLogos__Icons"/>
                        </div>
                    </div>
                </div>

                {/* ONLY IN TABLET & DESKTOP VERSIONS*/}
                {screenWidth > 697 ? <ProductDetailTabs/> : null}
                {/* ONLY IN TABLET & DESKTOP VERSIONS*/}
            </section>


            <div className="ProductDetailPageBackground">
                <PopularItems screenWidth={screenWidth}/>
            </div>

            <Benefits/>

            <Footer screenWidth={screenWidth}/>

            {/* ONLY IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed screenWidth={screenWidth}/> : null}
            {/* ONLY IN MOBILE VERSION */}
        </>
    );
};

export default ProductDetailPage;