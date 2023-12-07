import React from "react"
import "../styles/footer.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import fb from "../images/fb.png";
import instagram from "../images/insta.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

function Footer() {

    const form = useRef();
    const [formOpen, setFormOpen] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9vyzaie",
                "template_9gyvzuo",
                form.current,
                "O8Gs0mH_WkVC5FGSW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormOpen(false);

                    alert("Done!");
                },
                (error) => {
                    console.log(error.text);
                    setFormOpen(false);
                    alert("couldn't able to send message!  ");
                }
            );
    };


    return (
        <div className="footer">
            <div className="col-1">
                <h3> About Us</h3>
                <div className="footer-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s </p>
                </div>
            </div>
            <div className="col-2">
                <h3>Information</h3>

                <ul>
                    <li>
                        <a href="/service"> About</a>
                    </li>
                    <li>
                        <a href="#"> Meet Our Team</a>
                    </li>
                    <li>
                        <a href="#"> Our Portfolio</a>
                    </li>
                    <li>
                        <a href="#"> Latest News</a>
                    </li>
                    <li>
                        <a href="#"> Contact</a>
                    </li>
                </ul>
            </div>

            <div className="col-3">
                <h3>Helpful</h3>
                <ul>
                    <li>
                        <a href="/service"> +1 (817) *** 3377</a>
                    </li>
                    <li>
                        <a href="#">
                            info@example.com</a>
                    </li>
                </ul>
                <div className="footer-s-icon">
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

            <div className="col-4">
                <h3>Get the best viral<br></br>
                    strories straight into<br></br>
                    your inbox!
                </h3>
                <form className="search-bar" ref={form} onSubmit={sendEmail}>
                    <input type="email" placeholder="Email" name="email" className="search-input" />
                </form>
                <button type="submit" width="100%" className="subscribe-button">
                    {" "}
                    Subscribe
                </button>
            </div>
        </div>
            );
}
export default Footer;