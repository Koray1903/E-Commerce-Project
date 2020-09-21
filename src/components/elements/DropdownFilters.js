import React from "react";
import "../../style/DropdownFilters.scss"

const DropdownFilters = () => {

    // FILTER VALUES
    const priceArray = ["$0.00 - $100.00", "$100.00 - $300.00", "$300.00 - $700.00"];
    const colorArray = ["#ffffff", "#43c0cf", "#3d402f", "#4aaf00", "#315bbd", "#ec6115", "#dc041d", "#efead7"];
    const brandArray = ["Ukraine sport", "Poland sport", "Germany sport"];
    const sortArray = ["Price", "Rating", "Feedback"];
    const sizeArray = ["Small", "Medium", "Large"];
    const showArray = ["16 per page", "32 per page", "64 per page"];
    // FILTER VALUES

    return (
        <section className="DropdownFilters__Background">

            <div className="DropdownFilters">

                {/* PRICE FILTER */}
                <div className="DropdownFilters__Row">
                    <label>Price</label>
                    <select className="DropdownFilters__Filter">
                        {priceArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* PRICE FILTER */}

                {/* COLOR PALETTE - LATER */}

                {/* BRAND FILTER */}
                <div className="DropdownFilters__Row">
                    <label>Brand</label>
                    <select className="DropdownFilters__Filter">
                        {brandArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* BRAND FILTER */}

                {/* SORT FILTER */}
                <div className="DropdownFilters__Row">
                    <label>Sort by</label>
                    <select className="DropdownFilters__Filter">
                        {sortArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* SORT FILTER */}

                {/* SIZE FILTER */}
                <div className="DropdownFilters__Row">
                    <label>Size</label>
                    <select className="DropdownFilters__Filter">
                        {sizeArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* SIZE FILTER */}

                {/* SHOW FILTER */}
                <div className="DropdownFilters__Row">
                    <label>Show</label>
                    <select className="DropdownFilters__Filter">
                        {showArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* SHOW FILTER */}

            </div>

        </section>
    );
};

export default DropdownFilters;