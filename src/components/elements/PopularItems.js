import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {addToCart, addToWishlist} from "../../redux/actions.js";
import {useDispatch, useSelector} from "react-redux";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../style/PopularItems.scss";

const PopularItems = ({screenWidth}) => {

    // REDUX
    const dispatch = useDispatch();
    const PopularProducts = useSelector(state => state.shopReducer.PopularProducts);

    const handleAddToCart = useCallback(() => {
        dispatch(addToCart(1));
    }, []);

    const handleAddToWishlist = useCallback(() => {
        dispatch(addToWishlist(1));
    }, []);
    // REDUX

    const handleClick = useCallback(() => {
        dispatch(addToCart(1));
        setPurchaseStatus(!purchaseStatus);
    }, []);

    // FOR PRODUCT TWO
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    // FOR PRODUCT TWO

    // EXTRA LOADED PRODUCTS
    const [loadedProducts, setLoadedProducts] = useState(0);

    const handleLoadClick = useCallback(() => {
        setLoadedProducts(loadedProducts + 4);
    }, [loadedProducts]);
    // EXTRA LOADED PRODUCTS

    return (
        <section className="PopularItems">

            <div className="PopularItems__Title">
                <div className="PopularItems__Title__HorizontalLine"/>
                <p className="PopularItems__Title__Text">Popular Items</p>
                <div className="PopularItems__Title__HorizontalLine"/>
            </div>

            {/* MOBILE */}
            {screenWidth < 768 ?
                <OwlCarousel
                    className="owl-theme PopularItems__Mobile__Carousel"
                    loop
                    margin={25}
                    items="1"
                    nav={false}>

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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                                    onClick={handleClick}
                                    disabled={purchaseStatus}>
                                    buy now
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                                My dragons are misbehaving again. Unbelieveable!</p>
                            <div className="PopularItems__SingleItem__Static__Gradient__Comment">
                                <i className="far fa-comment PopularItems__SingleItem__Static__Gradient__Comment__Icon"/>
                                <p className="PopularItems__SingleItem__Static__Gradient__Comment__Text">5h ago</p>
                            </div>
                        </div>

                    </div>
                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}

                </OwlCarousel>
                : null}
            {/* MOBILE */}


            {/* TABLET & DESKTOP */}
            {screenWidth > 767 ?
                <section className="PopularItems__DesktopTablet">
                    {/* PRODUCT ONE */}
                    <div className="PopularItems__SingleItem">
                        <img className="PopularItems__Image"
                             src="./PopularItems/popular-item-1.png"
                             alt="First slide"/>

                        <div className="PopularItems__Info">
                            <p className="PopularItems__Info__Name">Kristina Dam Oak Table With White<br/> Marble Top
                            </p>
                            <p className="PopularItems__Info__Price">$ 799.55</p>
                        </div>

                        <div className="PopularItems__SingleItem__OnHover">
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                                    onClick={handleClick}
                                    disabled={purchaseStatus}>
                                    buy now
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                   onClick={handleAddToCart}/>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                   onClick={handleAddToWishlist}/>
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
                                My dragons are misbehaving again. Unbelieveable!
                            </p>
                            <div className="PopularItems__SingleItem__Static__Gradient__Comment">
                                <i className="far fa-comment PopularItems__SingleItem__Static__Gradient__Comment__Icon"/>
                                <p className="PopularItems__SingleItem__Static__Gradient__Comment__Text">5h ago</p>
                            </div>
                        </div>

                    </div>
                    {/* PRODUCT EIGHT - STATIC WITH GRADIENT */}

                    {/* EXTRA LOADED PRODUCTS */}
                    {PopularProducts.slice(0, loadedProducts).map(product => (
                        <div className="PopularItems__SingleItem">
                            <img className="PopularItems__Image"
                                 src={product.productSrc}
                                 alt={product.productAlt}/>

                            <div className="PopularItems__Info">
                                <p className="PopularItems__Info__Name">{product.productName}</p>
                                <p className="PopularItems__Info__Price">{product.productPrice}</p>
                            </div>

                            <div className="PopularItems__SingleItem__OnHover">
                                <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                    <i className="fas fa-plus PopularItems__SingleItem__OnHover__CartIcon"
                                       onClick={handleAddToCart}/>
                                </div>

                                <div className="PopularItems__SingleItem__OnHover__IconBackground">
                                    <i className="fas fa-heart PopularItems__SingleItem__OnHover__FavoriteIcon"
                                       onClick={handleAddToWishlist}/>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* EXTRA LOADED PRODUCTS */}

                </section>
                : null}
            {/* TABLET & DESKTOP */}

            {/* LOAD MORE BUTTON */}
            {loadedProducts !== PopularProducts.length ?
                <div className="PopularItems__DesktopTablet__LoadMoreButton"
                     onClick={handleLoadClick}>
                    <button className="">LOAD MORE</button>
                    <i className="fas fa-redo-alt PopularItems__DesktopTablet__LoadMoreButton__Icon"/>
                </div>
                : null}
            {/* LOAD MORE BUTTON */}

        </section>
    );
};

export default PopularItems;