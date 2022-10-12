import React from 'react'
import { Link } from 'react-router-dom'
import Overlapdiv from '../../component/Overlapdiv'

function Schoolcircular() {
    return (
        <>
        <Overlapdiv/>
            <div className="container p-3">
                <h1 className='text-center fw-bold'>School Circular</h1>
                <h3 className='m-3 fw-bold'>Session: 2022-23</h3>
                <div className="container d-flex justify-content-between item-center">
                    <p>CLASS – PRE PRIMARY – HINDI KAHANI CIRCULAR</p><Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
                </div>
                <div className="container d-flex justify-content-between item-center">
                    <p>Class Pre Primary – Desh Bhakti Geet Competition</p><Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
                </div>
                <div className="container d-flex justify-content-between item-center">
                    <p>CIRCULAR FOR STUDENT EDITORS (X to XII) 2022-23</p><Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
                </div>
                <div className="container d-flex justify-content-between item-center">
                    <p>CIRCULAR FOR SCHOOL MAGAZINE (III-XII) 2022-23</p><Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
                </div>
                <div className="container d-flex justify-content-between item-center">
                    <p>Class Pre School – Colouring Competition</p><Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
                </div>
            </div>
        </>
    )
}

export default Schoolcircular