import React from 'react';
import "../../style/Benefits.scss"

const Benefits = () => {


    return (
        <section className="Benefits">

            <div className="Benefits__Delivery">
                <img className="Benefits__Logos__Delivery"
                     src="./Delivery.svg" alt="delivery"/>
                <div>
                    <p className="Benefits__Title">Focus</p>
                    <p className="Benefits__Text">Our unwavering focus on superior service delivery and building next
                        generation competencies</p>
                </div>
            </div>

            <div className="Benefits__Recycle">
                <div>
                    <p className="Benefits__Title">Method</p>
                    <p className="Benefits__Text">A standardized methodology designed to deliver measurable business
                        results and predictable costs</p>
                </div>
                <img className="Benefits__Logos__Recycle"
                     src="./Recycle.svg" alt="recycle"/>
            </div>

            <div className="Benefits__Clipboard">
                <img className="Benefits__Logos__Clipboard"
                     src="./Clipboard.svg" alt="clipboard"/>
                <div>
                    <p className="Benefits__Title">Knowledge</p>
                    <p className="Benefits__Text">A highly skilled, proactive workforce that reliably improves each
                        client’s ROI while mitigating their business risk</p>
                </div>
            </div>

        </section>
    );
};

export default Benefits;