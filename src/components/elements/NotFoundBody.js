import React from "react";
import "../../style/NotFoundBody.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFoundBody = () => {

    return (
        <section className="NotFoundPage">

            <div className="NotFoundPageBody">
                {/* NAVIGATION */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/" className="breadcrumb__home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">404</li>
                    </ol>
                </nav>
                {/* NAVIGATION */}

                <div className="NotFoundPage__Services">
                    <div className="NotFoundPage__Services__HorizontalLine"/>
                    <p className="NotFoundPage__Services__Text">404</p>
                    <div className="NotFoundPage__Services__HorizontalLine"/>
                </div>
            </div>


            <div className="NotFoundPage__Message__Outer">
                <p className="NotFoundPage__Message__Outer__One">Oops!</p>

                <div className="NotFoundPage__Message__Inner">
                    <p className="NotFoundPage__Message__Inner__Two">Sorry, this page could not be found!</p>

                    <p className="NotFoundPage__Message__Inner__Three">
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa.
                    </p>

                    <p className="NotFoundPage__Message__Inner__Four">Go back to Homepage</p>

                    <p className="NotFoundPage__Message__Inner__SearchTitle">Search our site</p>

                    <div className="NotFoundPage__Message__Inner__Search">
                        <input className="NotFoundPage__Message__Inner__Search__Input"
                               placeholder="SEARCH" type="text"/>
                        <i className="fas fa-search NotFoundPage__Message__Inner__Search__Icon"/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NotFoundBody;