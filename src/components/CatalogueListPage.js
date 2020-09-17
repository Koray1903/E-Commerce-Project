import React from 'react';
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Fixed from "./elements/Fixed";
import DropdownFilters from "./elements/DropdownFilters";
import "bootstrap/dist/css/bootstrap.min.css";

const CatalogueListPage = () => {

    return (
        <>
            <Header/>

            <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" className="breadcrumb__home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Category Landing Page</li>
                </ol>
            </nav>

                {/* LATER */}
                <h1>Services</h1>


                <p>Hide Filter</p>
                {/* LATER */}
            </div>

            <DropdownFilters/>


            {/* TO BE IMPLEMENTED */}
            <Footer/>
            <Fixed/>
        </>
    );
};

export default CatalogueListPage;