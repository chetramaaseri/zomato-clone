import React from "react";
import "./header.css";
import TabSwitch from "./tabSwitch";
import Filter from "./filter";

function Header(){
    return (
        <>
        <div className="container headNav">
            <div className="logo">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" srcset="" />
            </div>
            <div className="topSearch">
                <div className="citySearch">
                    <i className="fa-solid fa-location-dot" style={{color: "#e1092a",opacity:0.5,}}></i>
                    <input type="search" name="citySearch" id="" placeholder="Ludhiana" />
                    <i className="fa-solid fa-caret-up" style={{color: "#000000",}}></i>
                </div>
                <div className="divider">|</div>
                <div className="inputSearch">
                    <i className="fa-solid fa-magnifying-glass" style={{color: "#000000",}}></i>
                    <input type="search" name="inputSearch" id="" placeholder="Search for restaurant, cuisine or a dish" />
                </div>
            </div>
            <div className="action-btns">
                <button className="btn">Login</button>
                <button className="btn">Signup</button>
            </div>
        </div>
        <TabSwitch/>
        <Filter/>
        </>
    );
}
export default Header;