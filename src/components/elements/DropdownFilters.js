import React, {useState, useCallback} from "react";
import "../../style/DropdownFilters.scss";

const DropdownFilters = () => {

    // FILTER VALUES
    const priceArray = ["$0.00 - $100.00", "$100.00 - $300.00", "$300.00 - $700.00"];
    const colorArray = ["#ffffff", "#43c0cf", "#3d402f", "#4aaf00", "#315bbd", "#ec6115", "#dc041d", "#efead7"];
    const brandArray = ["Ukraine sport", "Poland sport", "Germany sport"];
    const sortArray = ["Price", "Rating", "Feedback"];
    const sizeArray = ["Small", "Medium", "Large"];
    const showArray = ["16 per page", "32 per page", "64 per page"];
    // FILTER VALUES

    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const handleClick = useCallback((index) => {
        setSelectedColorIndex(index);
    }, [selectedColorIndex]);

    return (
        <section className="DropdownFilters__Background">

            <div className="DropdownFilters" style={{background: `${colorArray[selectedColorIndex]}`}}>

                {/* PRICE FILTER */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Price</label>
                    <select className="DropdownFilters__Filter">
                        {priceArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* PRICE FILTER */}

                {/* COLOR PALETTE */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Color</label>
                    <div className="DropdownFilters__Colors">
                        {colorArray.map((color, index) => (
                            <div style={{backgroundColor: `${color}`}} key={index}
                                 className={`DropdownFilters__Colors__Color Dropdown ${selectedColorIndex === index ? "DropdownFilters__Colors__Color__Selected" : null}`}
                                 onClick={() => handleClick(index)}/>
                        ))}
                    </div>
                </div>
                {/* COLOR PALETTE */}

                {/* BRAND FILTER */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Brand</label>
                    <select className="DropdownFilters__Filter">
                        {brandArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* BRAND FILTER */}

                {/* SORT FILTER */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Sort by</label>
                    <select className="DropdownFilters__Filter">
                        {sortArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* SORT FILTER */}

                {/* SIZE FILTER */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Size</label>
                    <select className="DropdownFilters__Filter">
                        {sizeArray.map((element, index) => (
                            <option value={element} key={index}>{element}</option>
                        ))}
                    </select>
                </div>
                {/* SIZE FILTER */}

                {/* SHOW FILTER */}
                <div className="DropdownFilters__Row">
                    <label className="DropdownFilters__Row__Label">Show</label>
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