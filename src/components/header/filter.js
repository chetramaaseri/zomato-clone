import React from "react";
import './filter.css';

function Filter(){
    return(
        <div className="container">
            <div className="filters">
                <div className="filter">
                    <i className="fa-solid fa-sliders"></i>
                    <span>Filters</span>
                </div>
                <div className="filter">
                    <span>Rating 4.0+</span>
                </div>
                <div className="filter">
                    <span>Pure Veg</span>
                </div>
                <div className="filter">
                    <span>Cuisines</span>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
                <div className="filter">
                    <span>More flters</span>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}
export default Filter;