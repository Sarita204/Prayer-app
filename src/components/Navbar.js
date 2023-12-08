import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import calling from "../images/calling.png";
import menu from "../images/menu.png";
import download from "../images/down-arrow.png";
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div>
            <header className="navbar-container">
                <div className="nav-logo-container">
                    <img src={logo} alt="logo" className="navbar-logo" />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links">
                            Home
                        </NavLink>{" "}
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links">
                            About Us
                        </NavLink>{" "}
                    </li>

                    <li className="nav-item">
                        <NavLink to="/service" className="nav-links">
                            Service
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallary" className="nav-links">
                            Gallery
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links">
                            Contact Us
                        </NavLink>{" "}
                    </li>
                </ul>
                <div className="navbar-left-icons">
                    <img src={calling} alt="logo" className="call-icon" /> <p style={{ color: "white", margin:"auto" }}>+ (111) 1000-500-800</p>
                </div>
                <div className="download-button">
                    <p>Download App</p>
                    <img src={download} alt="logo" className="download-icon" /> 
                </div>
                <img src={menu} alt="menu-icon" 
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
                />
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links">
                            Home
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links">
                            About Us
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/service" className="nav-links">
                            Services
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallary" className="nav-links">
                            Gallary
                        </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links">
                            Contact Us
                        </NavLink>{" "}
                    </li>   
                    <div className="navbar-left-icons">
                    <img src={calling} alt="logo" className="call-icon" /> <p style={{ color: "white" }}>+ (111) 1000-500-800</p>
                </div> 
                    </ul>
                    
                </div>
            </header>
        </div>
    );
}
export default Navbar;