import React from "react";
import gallarybanner from "../images/gallarybanner.png";

function Contact(){
    return(
        <div>
             <div className="banner-logo-section" >
                <img src={gallarybanner} alt="logo" className="banner-logo" />
                <p className="banner-first-title">CONTACT</p>
                <h2 className="banner-main-title">OUR PRAYER GALLERY</h2>
            </div>
        </div>
    )
}

export default Contact;