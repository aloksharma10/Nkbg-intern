import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Navabout() {
    return (
        <>
            <div className="container mt-3" >
                <nav className="bg-light display-flex fs-5">
                    <div className={`container text-center p-1 marginY-1 ${useLocation().pathname === "/our-vision" ? "border-bottom border-primary active" : ""}`} >
                        <Link className="text-decoration-none text-dark" to="/our-vision">Our Vision</Link>
                    </div>
                    <div className={`container text-center p-1 marginY-1 ${useLocation().pathname === "/our-mission" ? "border-bottom border-primary active" : ""}`}>
                        <Link className="text-decoration-none text-dark" to="/our-mission">Our Mission</Link>
                    </div>
                    <div className={`container text-center p-1 marginY-1 ${useLocation().pathname === "/our-motto" ? "border-bottom border-primary active" : ""}`}>
                        <Link className="text-decoration-none text-dark " to="/our-motto">Our Motto</Link>
                    </div>
                    <div className={`container text-center p-1 marginY-1 ${useLocation().pathname === "/message" ? "border-bottom border-primary active" : ""}`}>
                        <Link className="text-decoration-none text-dark " to="/message">Message</Link>
                    </div>
                    <div className={`container text-center p-1 marginY-1 ${useLocation().pathname === "/recognized-affiliated" ? "border-bottom border-primary active" : ""}`}>
                        <Link className="text-decoration-none text-dark" to="/recognized-affiliated">Recognition & Affiliation</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navabout