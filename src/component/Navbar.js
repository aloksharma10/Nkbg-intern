import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    const changeBackground = () => {
        let nav = document.getElementById("navbar")
        if (window.pageYOffset > 110) {
            nav.style.backgroundColor = "white"
            nav.style.transition = "1"
            nav.classList.toggle("onscroll", window.scrollY > 20)
        } else {
            document.getElementById("navbar").style.backgroundColor = ""
            nav.classList.remove("onscroll")
        }
    }
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg" id='navbar'>
                <div className="container p-0" >
                    <Link className="navbar-brand d-flex" to="/">
                        <img className="mx-1" style={{ marginRight: "5px" }} src="img/assets/nkbglobalschool-logo.png" alt="" srcSet="" />
                        <div className="col-md-3 my-4">
                            <h4 className='fw-bold text-center'>N.K Bagrodia</h4>
                            <h4 className='fw-bold text-center'>Global School</h4>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/academic" ? "active" : ""}`} to="/academic">Academics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/beyond-academic" ? "active" : ""}`} to="/beyond-academic">Beyond Academics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/emagazine" ? "active" : ""}`} to="/emagazine">E-News Letter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/our-vision" ? "active" : ""}`} to="/our-vision">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${useLocation().pathname === "/contact-us" ? "active" : ""}`} to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar