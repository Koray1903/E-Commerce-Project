import React from 'react';
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import DropdownFilters from "./elements/DropdownFilters";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/CateogoryLandingPage.scss"

const CategoryLandingPage = () => {

    return (
        <>
            <Header/>

            <div className="CategoryLandingPageBody">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/" className="breadcrumb__home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Category Landing Page</li>
                    </ol>
                </nav>

                <div className="CategoryLandingPage__Services">
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                    <p className="CategoryLandingPage__Services__Text">Services</p>
                    <div className="CategoryLandingPage__Services__HorizontalLine"/>
                </div>

                <p className="HideFilter__Text">Hide Filter</p>
            </div>

            <DropdownFilters/>

            {/* CLP PRODUCT TILES - TO BE IMPLEMENTED LATER */}

            <Footer/>

            <Fixed/>
        </>
    );
};

export default CategoryLandingPage;