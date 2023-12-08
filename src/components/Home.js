import React from "react";
import "../styles/home.css";
import bannerlogo from "../images/banner.jpg";
import carpuja from "../images/carpuja.png";
import landpuja from "../images/landpuja.png";
import prasada from "../images/prasada.png";
import marriage from "../images/marriage.png";
import dharson from "../images/dharson.png";
import pooja from "../images/pooja.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import vedio from "../images/pooja.mp4";

import carpuja1 from "../images/carpuja1.png"
import prasada1 from "../images/prasada1.png"
import marriage1 from "../images/marriage1.png"
import dharson1 from "../images/dharson1.png"
import pooja1 from "../images/pooja1.png"
import bhoomipooja1 from "../images/bhumi_puja_2.png";
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <div className="banner-component">

            {/* Home page Banner-section */}
            <div className="banner-logo-section">
                <img src={bannerlogo} alt="logo" className="banner-logo" />
                <p className="banner-first-title">Welcome to our Website</p>
                <h2 className="banner-main-title">Some Important Life <br></br>Lessons From Gita</h2>
                <div className="register-button">
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </div>

            {/* Home page Service section */}
            <div className="home-page-service-section">
                <div className="service-title-section">
                    <h6>Our Services</h6>
                    <h1>A ASTROLOGER WITH RELEVANT SERVICES</h1>
                </div>
                <div className="service-card-container" >
                    <div className="service-cards">
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">CAR POOJA</h5>
                            <img src={carpuja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">BHOOMI POOJA</h5>
                            <img src={landpuja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">PRASADA</h5>
                            <img src={prasada} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-cards">
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">MARRIAGE</h5>
                            <img src={marriage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">DHARSON</h5>
                            <img src={dharson} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "350px" }}>
                            <h5 className="card-title">POOJA</h5>
                            <img src={pooja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/service" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* We are a Prayer section */}
            <div className="home-page-service-section">
                <div className="service-title-section">
                    <h6>WE ARE A PRAYER</h6>
                    <h1 style={{ paddingBottom: "20px" }}>WE ARE A HINDU THAT<br></br>BELIEVE IN RAM</h1>
                    <p className="we-are-prayer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br></br>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br></br>pariatur.</p>
                    <div className="read-more-button">
                        <button type="button" className="btn btn-primary">Read More</button>
                    </div>
                </div>

                <div className="service-cards">
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                        <img src={img1} className="card-img-top" alt="..." />
                    </div>
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "500px", paddingTop: "60px", border: "none", background: "rgb(241 236 236)" }}>
                        <img src={img3} className="card-img-top" alt="..." />
                    </div>
                    <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                        <img src={img2} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>

            {/* OUR MISSION & VISION section */}
            <div className="home-page-service-section">
                <div className="service-title-section">
                    <h6>OUR MISSION & VISION</h6>
                    <h1 style={{ paddingBottom: "20px" }}>CELEBRATE WITH US</h1>
                    <p className="we-are-prayer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. </p>
                    <div className="read-more-button">
                        <button type="button" className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>

            {/* WATCH AND LISTEN */}
            <div className="home-page-service-section">
                <div className="service-title-section">
                    <h6>WATCH AND LISTEN</h6>
                    <h1>THE BENEFITS OF JOINING<br></br>OUR RECENT EVENT</h1>
                </div>

                <div className="service-card-container" >
                    {/* <div className="service-cards" style={{ paddingBottom: "30PX" }}>
                        <div className="card" style={{ width: "16rem ", margin: "10px", height: "300px" }}>
                            <h5 className="card-title">Car Pooja</h5>
                            <img src={carpuja} className="card-img-top" alt="..." />
                        </div>
                        <div className="card" style={{ width: "16rem", margin: "10px", height: "300px" }}>
                            <h5 className="card-title">Bhoomi Pooja</h5>
                            <img src={landpuja} className="card-img-top" alt="..." />
                        </div>
                        <div className="card" style={{ width: "16rem", margin: "10px", height: "300px" }}>
                            <h5 className="card-title">Marriage</h5>
                            <img src={marriage} className="card-img-top" alt="..." />
                        </div>
                        <div className="card" style={{ width: "16rem", margin: "10px", height: "300px" }}>
                            <h5 className="card-title">Prasada</h5>
                            <img src={prasada} className="card-img-top" alt="..." />
                        </div>
                    </div> */}

<div className="slider-component">
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={carpuja1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>CAR POOJA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={bhoomipooja1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>BHOOMI POOJA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={prasada1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>PRASADA</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={marriage1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>MARRIAGE</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={dharson1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>DHARSON</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-10"
          src={pooja1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>POOJA</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>

            </div>
            </div>
                    {/* vedio section */}
                    <div>
                        <video className="vedio" controls >
                                <source src={vedio} type="video/mp4" />
                         </video>
                        </div>
                    </div>
            );

}

            export default Home;