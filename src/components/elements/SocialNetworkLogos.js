import React from "react";
import "../../style/SocialNetworkLogos.scss";

const SocialNetworkLogos = () => {

    return (
        <section className="SocialNetworkLogos">
            <a target="_blank" href="https://www.facebook.com">
                <i className="fab fa-facebook-f SocialNetworkLogos__Facebook"/>

            </a>

            <a target="_blank" href="https://www.google.com">
                <i className="fab fa-google SocialNetworkLogos__Google"/>
            </a>

            <a target="_blank" href="https://www.twitter.com">
                <i className="fab fa-twitter SocialNetworkLogos__Twitter"/>
            </a>

            <a target="_blank" href="https://www.pinterest.com">
                <i className="fab fa-pinterest-p SocialNetworkLogos__Pinterest"/>
            </a>
        </section>
    );
};

export default SocialNetworkLogos;