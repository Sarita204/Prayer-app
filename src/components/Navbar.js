import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import calling from "../images/calling.png";
import menu from "../images/menu.png";
import download from "../images/down-arrow.png";
import timer from "../images/timer.png";
import fb from "../images/fb.png";
import instagram from "../images/insta.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import pinrest from "../images/pinrest.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div>
            <div className="top-nav-container">
                <div className="top-navbar">
                    <div className="navbar-left-icons">
                    <img src={calling} alt="logo" className="call-icon" /> <p style={{ color: "white", margin:"auto" }}>+ (111) 1000-500-800</p>
                     </div>

                     <div className="navbar-left-icons">
                    <img src={timer} alt="logo" className="call-icon" /> <p style={{ color: "white", margin:"auto" }}>Mon - Sat : 9:00 - 18:00</p>
                     </div>
                </div>
                <div className="navbar-social-icon">
                    <a
                        traget="_blank"
                        href="https://www.facebook.com/"
                    >
                        <img src={fb} alt="logo1" className="footer-social-icon" />
                    </a>
                    <a
                        traget="_blank"
                        href="https://www.twitter.com/"
                    >
                        <img src={twitter} alt="logo1" className="footer-social-icon" />
                    </a>
                    <a
                        traget="_blank"
                        href="https://www.instagram.com/"
                    >
                        <img src={instagram} alt="logo1" className="footer-social-icon" />
                    </a>
                    <a
                        traget="_blank"
                        href="https://www.linkedin.com/"
                    >
                        <img src={linkedin} alt="logo1" className="footer-social-icon" />
                    </a>
                    <a
                        traget="_blank"
                        href="https://www.pinterest.com/"
                    >
                        <img src={pinrest} alt="logo1" className="footer-social-icon" />
                    </a>
                </div>
               
                </div>
            <header className="navbar-container">
                <div className="nav-logo-container">
                    <a href="/">
                    <img src={logo} alt="logo" className="navbar-logo" />
                    </a>
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
                <div>
                <div className="download-button">
                    <p>Download App</p>
                    <img src={download} alt="logo" className="download-icon" /> 
                </div>
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