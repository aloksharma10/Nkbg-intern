import React from 'react'
import { Link, useLocation } from "react-router-dom";


function NavforHorizontalcard() {
    return (
        <div className="container mt-3" >
            <nav className="bg-light display-flex fs-5">
                <div className={`container text-center marginY-1 ${useLocation().pathname==="/academic" ? "border-bottom border-primary active": ""}`}>
                    <Link className="text-decoration-none text-dark" to="/academic">Academics</Link>
                </div>
                <div className={`container text-center marginY-1 ${useLocation().pathname==="/beyond-academic" ? "border-bottom border-primary active": ""}`} >
                    <Link className="text-decoration-none text-dark" to="/beyond-academic">Beyond Academics</Link>
                </div>
                <div className={`container text-center marginY-1 ${useLocation().pathname==="/club" ? "border-bottom border-primary active": ""}`}>
                    <Link className="text-decoration-none text-dark " to="/club">Club</Link>
                </div>
                <div className={`container text-center marginY-1 ${useLocation().pathname==="/infrastructure" ? "border-bottom border-primary active": ""}`}>
                    <Link className="text-decoration-none text-dark" to="/infrastructure">Infrastructure</Link>
                </div>
                <div className={`container text-center marginY-1 ${useLocation().pathname==="/rules-regulation" ? "border-bottom border-primary active": ""}`}>
                    <Link className="text-decoration-none text-dark" to="/rules-regulation">Rules & Regulation</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavforHorizontalcard