import React from "react"
import "../styles/cardetails.css"
import benefitimg2 from "../images/benefitimg2.png";
import backarrow from "../images/left-arrow.png";
import marriage1 from "../images/marriage1.png"

function MarriageDetails() {
    return (
            <div className='car-details-component'>
                <a href="/service">
                    <img src={backarrow} alt-="icon" className="backword" />
                    Back
                </a>

                <div className='car-details-card'>
                    <div className='car-details-img-container'>
                        <img src={marriage1} alt="logo" className='car-details-images' />
                    </div>
                    <div className='car-details-content-container'>
                        <h5 className='car-details-title' style={{ textAlign: "justify" }}>MARRIAGE</h5>
                        <p className='car-details-tagline' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    </div>
                </div>
            </div>
    );
}

export default MarriageDetails;