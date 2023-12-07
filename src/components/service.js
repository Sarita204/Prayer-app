import React from "react"
import servicebanner from "../images/servicebanner.png";
import carpuja from "../images/carpuja.png";
import landpuja from "../images/landpuja.png";
import prasada from "../images/prasada.png";
import marriage from "../images/marriage.png";
import dharson from "../images/dharson.png";
import pooja from "../images/pooja.png";
function Service() {
    return (
        <div>
            <div className="banner-logo-section">
                <img src={servicebanner} alt="logo" className="banner-logo" />
                <p className="banner-first-title">SERVICES</p>
                <h2 className="banner-main-title">A ASTROLOGER WITH RELEVANT SERVICES</h2>
            </div>

            <div className="home-page-service-section" style={{ paddingBottom: "40px" }}>
                <div className="service-title-section">
                    <h6>Our Services</h6>
                    <h1>A ASTROLOGER WITH RELEVANT SERVICES</h1>
                </div>
                <div className="service-card-container" >
                    <div className="service-cards">
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={carpuja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Car Pooja</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={landpuja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bhoomi Pooja</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={prasada} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Prasada</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-cards">
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={marriage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Marriage</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={dharson} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dharson</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ width: "20rem", margin: "10px", height: "380px" }}>
                            <img src={pooja} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Car Pooja</h5>
                                <div className="layer">
                                    <h3>
                                        <p className="description">Description</p>
                                    </h3>
                                    <h5>
                                        <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </h5>

                                    <h4>
                                        <a href="/" className="read-more">Read More...</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Service;