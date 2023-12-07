import React from 'react'
import "../styles/about.css"
import aboutbanner from "../images/aboutbanner.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import aboutimg1 from "../images/aboutimg1.png";
import aboutimg2 from "../images/aboutimg2.png";
import aboutimg3 from "../images/aboutimg3.png";
import benefitimg1 from "../images/benefitimg1.png";
import benefitimg2 from "../images/benefitimg2.png";
import benefitimg3 from "../images/benefitimg3.png";

function About() {
    return (
        <div>
            <div className="banner-logo-section">
                <img src={aboutbanner} alt="logo" className="banner-logo" />
                <p className="banner-first-title">ABOUT US</p>
                <h2 className="banner-main-title">OUR ACHIEVMENTS</h2>
            </div>

            <div className="home-page-service-section" style={{ paddingBottom: "50px", background: "none" }}>
                <div className="service-title-section">
                    <h6>WELCOME TO OUR WEBSITE</h6>
                    <h1 style={{ paddingBottom: "20px" }}>WE ARE A HINDU THAT BELIVES IN<br></br>LORD RAMA AND VISHNU DEVA</h1>
                    <p className="we-are-prayer-description" style={{ paddingBottom: "50px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br></br>pariatur.</p>
                </div>

                <div className="service-cards">
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                        <img src={aboutimg1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "500px", marginTop: "-30px", border: "none", background: "rgb(241 236 236)" }}>
                        <img src={aboutimg2} className="card-img-top" alt="..." />
                    </div>
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                        <img src={aboutimg3} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>

            <div className='our-mission-vision-card'>
                <div className="card" style={{ width: "22rem", border: "none" }}>
                    <div className="card-body">
                        <h6 className='about-card-subtitle'>OUR MISSION & VISION</h6>
                        <h5 className='about-card-title'>BELIVES IN LORD RAMA AND <br></br>VISHNU DEVA</h5>
                        <p className='about-card-tagline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    </div>
                </div>
                <div className="card" style={{ width: "22rem", border: "none" }}>
                    <div className="card-body">
                        <h6 className='about-card-right-subtitle'>WHAT WE DO</h6>
                        <h5 className='about-card-right-title'>OUR VOLUNTEERS ACHIEVMENTS</h5>
                        <p className='about-card-right-tagline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                    </div>
                </div>
            </div>

            <div className='benefit-component'>
                <div className="service-title-section">
                    <h6>BENEFIT</h6>
                    <h1>THE BENEFITS OF JOINING OUR TEMPLE</h1>
                </div>

                <div className='benefit-cards'>
                    <div className='benefit-card-components'>
                        <div className='content-caontainer'>
                            <h5 className='about-card-title'>DONATE EVENTS</h5>
                            <p className='about-card-tagline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                        </div>
                        <div className='image-caontainer'>
                            <img src={benefitimg1} alt="logo" className='benefit-images' />
                        </div>

                    </div>
                    <div className='benefit-card-components'>
                        <div className='image-caontainer'>
                            <img src={benefitimg2} alt="logo" className='benefit-images' />
                        </div>
                        <div className='content-caontainer'>
                            <h5 className='about-card-title' style={{ textAlign: "justify" }}>ALL ARE WELCOME</h5>
                            <p className='about-card-tagline' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                        </div>
                    </div>
                    <div className='benefit-card-components'>
                        <div className='content-caontainer'>
                            <h5 className='about-card-title'>FIND FULFILLMENT AND JOY</h5>
                            <p className='about-card-tagline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                        </div>
                        <div className='image-caontainer'>
                            <img src={benefitimg3} alt="logo" className='benefit-images' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;