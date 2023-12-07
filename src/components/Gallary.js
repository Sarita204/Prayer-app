import React from "react";
import aboutimg1 from "../images/aboutimg1.png";
import aboutimg2 from "../images/aboutimg2.png";
import aboutimg3 from "../images/aboutimg3.png";
import gallarybanner from "../images/gallarybanner.png";
import g1 from "../images/g1.png"
import g2 from "../images/g2.png"
import g3 from "../images/g3.png"
import g4 from "../images/g4.png"
import g5 from "../images/g5.png"
import g6 from "../images/g6.png"
import g7 from "../images/g7.png"
import g8 from "../images/g8.png"
import g9 from "../images/g9.png"
import g10 from "../images/g10.png"
import g11 from "../images/g11.png"
import g12 from "../images/g12.png"

function Gallary() {
    return (
        <div>
            <div className="banner-logo-section" >
                <img src={gallarybanner} alt="logo" className="banner-logo" />
                <p className="banner-first-title">GALLERY</p>
                <h2 className="banner-main-title">OUR PRAYER GALLERY</h2>
            </div>

            <div className="service-cards">
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g1} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g2} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g3} className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="service-cards">
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g4} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g5} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g6} className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="service-cards">
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g7} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g8} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g9} className="card-img-top" alt="..." />
                </div>
            </div>

            <div className="service-cards">
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g10} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g11} className="card-img-top" alt="..." />
                </div>
                <div className="card" style={{ width: "20rem", margin: "10px", height: "400px" }}>
                    <img src={g12} className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    );
}

export default Gallary;