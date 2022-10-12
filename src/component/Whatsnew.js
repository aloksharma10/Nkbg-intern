import React from 'react'
import { Link } from "react-router-dom";

function Whatsnew() {
    return (
        <div className='text-center text-light border border-light pt-2' style={{ backgroundColor: "rgb(188 74 10 / 92" }}>
            <h4>What's New</h4>
            {/* eslint-disable-next-line */}
            <marquee behavior="scroll" direction="up" scrollamount="2" className='text-center  my-3'>
                <h4>Welcome to NKBGS</h4>
                <Link to="/school-circular" className='text-light'>School Circular 2022-2023</Link>
                <br /><br />
                <Link to="/emagazine" className='text-light'>Newsletter 2022-2023</Link><br />
                <Link to="/" className='text-light'>Upcoming Events 2022-2023</Link>
            </marquee>
        </div>
    )
}

export default Whatsnew