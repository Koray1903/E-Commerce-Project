import React from "react";
import "../../style/NotFoundBody.scss"
import "bootstrap/dist/css/bootstrap.min.css";

const NotFoundBody = () => {

    return (
        <section className="NotFoundPage">

            <div className="NotFoundPageBody">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/" className="breadcrumb__home">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">404</li>
                    </ol>
                </nav>

                <div className="NotFoundPage__Services">
                    <div className="NotFoundPage__Services__HorizontalLine"/>
                    <p className="NotFoundPage__Services__Text">404</p>
                    <div className="NotFoundPage__Services__HorizontalLine"/>
                </div>
            </div>

            <div className="NotFoundPage__Message">
                <p className="NotFoundPage__Message__One">Oops!</p>

                <p className="NotFoundPage__Message__Two">Sorry, this page could not be found!</p>

                {/* SHORTEN - LATER */}
                <p className="NotFoundPage__Message__Three">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.<br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa.<br/>

                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo,
                    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                    vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                    elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                    vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue.
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                    condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                    blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                    consequat,
                    leo eget bibendum sodales, augue velit cursus nunc,</p>
                {/* SHORTEN - LATER */}

                <p className="NotFoundPage__Message__Four">Go back to Homepage</p>

                <p className="NotFoundPage__Message__SearchTitle">Search our site</p>

                <div className="NotFoundPage__Message__Search">
                    <input className="NotFoundPage__Message__SearchInput" placeholder="SEARCH" type="text"/>
                    <img className="NotFoundPage__Message__SearchIcon"
                         src="../ErrorPage/Search_Logo.svg" alt="search_icon"/>
                </div>
            </div>

        </section>
    );
};

export default NotFoundBody;