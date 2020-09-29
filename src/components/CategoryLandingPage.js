import React from 'react';
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import DropdownFilters from "./elements/DropdownFilters";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/CategoryLandingPage.scss";

const CategoryLandingPage = ({screenWidth}) => {

    return (
        <section>
            <Header screenWidth={screenWidth}/>


            <div className="CategoryLandingPageBody">
                {/* NAVIGATION */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="breadcrumb-item" href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Category Landing Page</li>
                    </ol>
                </nav>
                {/* NAVIGATION */}

                <div className="CategoryLandingPage__Services">
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                    <p className="CategoryLandingPage__Services__Text">Services</p>
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                </div>

                {/* ONLY IN MOBILE VERSION */}
                <p className="HideFilter__Text">Hide Filter</p>
                {/* ONLY IN MOBILE VERSION */}

                <DropdownFilters/>

                <p className="CategoryLandingPage__ResultsText">12,931 results in apparel</p>
            </div>


            {/* CLP PRODUCT TILES - REDIRECT TO PDP PAGE -  TO BE IMPLEMENTED LATER */}

            {/* LOAD MORE BUTTON */}

            {/* FEATURED PRODUCTS - REDIRECT TO PDP PAGE - IN DESKTOP VERSION */}

            <Footer screenWidth={screenWidth}/>

            {/* ONLY IN MOBILE VERSION */}
            {screenWidth < 768 ? <Fixed screenWidth={screenWidth}/> : null}
            {/* ONLY IN MOBILE VERSION */}
        </section>
    );
};

export default CategoryLandingPage;