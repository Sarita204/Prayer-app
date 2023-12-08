import React from "react";
import "../styles/contact.css";
import contactbanner from "../images/contactbanner.png";
import fb from "../images/fb.png";
import instagram from "../images/insta.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

function Contact() {

    return (
        <div>
            <div className="banner-logo-section" >
                <img src={contactbanner} alt="logo" className="banner-logo" />
                <p className="banner-first-title">CONTACT</p>
                <h2 className="banner-main-title">GET IN TOUCH WITH WEBSITE</h2>
            </div>
            <div className="contact-form-section">
                <div className="form-container">
                    <form style={{padding:"20px"}}>
                        <input type="text" id="fname" name="firstname" placeholder="Enter Your name" />

                        <input type="text" id="email" name="email" placeholder="Enter Your Email" />

                        <input type="text" id="number" name="number" placeholder="Enter Your Number" />

                        <textarea id="subject" name="subject" placeholder="Enter Your Message" style={{ height: "150px" }}></textarea>
                    </form>
                    <button className="send-button">Send Message</button>
                </div>
                <div className="address-container">
                    <div className="address-section">
                        <h3 >Address</h3>
                        <h5 >NH 234 Public Square San Francisco 65368</h5>
                    </div>
                    <div className="address-section">
                        <h3 >Contact Details</h3>
                        <h5 >(480) 555-0103</h5>
                        <h5>finsweet@example.com</h5>
                    </div>
                    <div className="address-section">
                        <h3 >Social Media</h3>
                        <div className="contact-s-icon">
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form-section">
                <div className="form-container">
                    <div className="faq">
                        <h2>Frequently Asked Questions</h2>
                        <ul className="accordian" style={{padding:"0px"}}>
                            <li>
                                <input type="radio" name="accordian" id="first" />
                                <label htmlFor="first">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordian" id="second" />
                                <label htmlFor="second">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordian" id="third" />
                                <label htmlFor="third">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordian" id="fourth" />
                                <label htmlFor="fourth">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordian" id="fifth" />
                                <label htmlFor="fifth">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordian" id="sixth" />
                                <label htmlFor  ="sixth">What is Prayer?</label>
                                <div className="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="address-container" style={{ margin: "auto" }}>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31090.71221723607!2d77.51774305451588!3d13.077687087843055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae235f0a8b57a7%3A0xaea5b061a969b5d1!2sParnets%20software!5e0!3m2!1sen!2sin!4v1701948851357!5m2!1sen!2sin" 
                        width="500" 
                        height="400" 
                        frameBorder="0"
                        style={{border:"0"}}
                        allowFullscreen="" 
                        aria-hidden="false"
                        tabIndex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;