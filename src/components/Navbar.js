import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import calling from "../images/calling.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return (
        <div>
            <header className="navbar-container">
                <div className="nav-logo-container">
                    <img src={logo} alt="logo" className="navbar-logo"/>
                </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-links">
                                Home
                            </Link>{" "}
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-links">
                                About Us
                            </Link>{" "}
                        </li>

                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links">
                                Gallary
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                <div className="navbar-left-icons">
                    <img src={calling} alt="logo" className="call-icon" /> <p style={{color:"white"}}>+ (111) 1000-500-800</p>
                </div>
            </header>
            </div>
    );
}
export default Navbar;