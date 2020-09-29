import React from "react";
import "../../style/SocialNetworkLogos.scss";

const SocialNetworkLogos = () => {

    return (
        /* LOGOS - NOT HIDDEN IN DESKTOP VERSION BY DEFAULT */
        <section className="SocialNetworkLogos">
            <a target="_blank" href="https://www.facebook.com">
                <img className="SocialNetworkLogos__Facebook" src="../facebook.svg" alt="Facebook"/></a>

            <a target="_blank" href="https://www.google.com">
                <img className="SocialNetworkLogos__Google" src="../google.svg" alt="Google"/></a>

            <a target="_blank" href="https://www.twitter.com">
                <img className="SocialNetworkLogos__Twitter" src="../twitter.svg" alt="Twitter"/></a>

            <a target="_blank" href="https://www.pinterest.com">
                <img className="SocialNetworkLogos__Pinterest" src="../pinterest.svg" alt="Pinterest"/></a>
        </section>
        /* LOGOS - NOT HIDDEN IN DESKTOP VERSION BY DEFAULT */
    );
};

export default SocialNetworkLogos;