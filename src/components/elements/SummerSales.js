import React from "react";
import "../../style/SummerSales.scss";

const SummerSales = () => {

    return (
        <section className="SummerSales">

            <div className="SummerSales__GreenBackground">
                <p className="SummerSales__GreenBackground__Text1">55%</p>
                <p className="SummerSales__GreenBackground__Text2">summer<br/>sales</p>
            </div>

            <div className="SummerSales__Facebook">

                <p className="SummerSales__Facebook__Title">Follow us on Facebook</p>
                <p className="SummerSales__Facebook__Text">Sed ut perspiciatis unde omnis iste natus error sit</p>


                <button className="SummerSales__Facebook__FollowButton">
                    <a target="_blank" href="https://www.facebook.com">
                        <img src="./SummerSales/FacebookIcon.svg"
                             className="SummerSales__Facebook__FollowButton__Icon"/>follow
                    </a>
                </button>

            </div>

        </section>
    );
};

export default SummerSales;