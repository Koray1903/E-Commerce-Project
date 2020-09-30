import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/ProductDetailPageTabs.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const ProductDetailPageTabs = () => {

    return (
        <section className="ProductDetailPageTabs">

            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">

                {/* DESCRIPTION TAB */}
                <Tab eventKey="description" title="Description">
                    <div className="Tab__Outer">

                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>

                            <p className="Tab__Text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa.
                            </p>
                        </div>

                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec
                                quam
                                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                                enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </p>
                        </div>

                    </div>
                </Tab>
                {/* DESCRIPTION TAB */}

                {/* ADDITIONAL INFORMATION TAB */}
                <Tab eventKey="additional-information" title="Additional Information">
                    <div className="Tab__Outer">
                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                massa quis
                                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </p>
                        </div>

                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                                dis
                                parturient montes, nascetur ridiculus mus.
                            </p>
                            <p className="Tab__Text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa.
                            </p>
                        </div>

                    </div>
                </Tab>
                {/* ADDITIONAL INFORMATION TAB */}

                {/* REVIEWS TAB */}
                <Tab eventKey="reviews" title="Reviews (3)">
                    <div className="Tab__Outer">
                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa.
                            </p>

                            <p className="Tab__Text">
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                massa quis
                                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            </p>
                        </div>

                        <div className="Tab__Inner">
                            <p className="Tab__Text">
                                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                                dis
                                parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>

                    </div>
                </Tab>
                {/* REVIEWS TAB */}

            </Tabs>

        </section>
    );
};

export default ProductDetailPageTabs;