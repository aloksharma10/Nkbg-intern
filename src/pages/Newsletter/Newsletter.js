import React from 'react'
import Overlapdiv from '../../component/Overlapdiv'
import Horicariimg from '../../component/Horicariimg'
import { Link } from 'react-router-dom'


function Newsletter() {

  return (

    <>
      <Overlapdiv />
      <Horicariimg title="E-News Letter" description="
        We'd like extend a big Welcome Back! to our students and their families and a Happy New Year.
        Were all slipping back into our familiar routines, working with one another, generating ideas,
        planning activities and games, and helping your children grow mentally, emotionally and
        physically to reach their fullest potential." p1="
        We'd like to express gratitude to our parent volunteers for diving right back into their duties in
        January as your time is and always has been invaluable to us. We're also looking forward to
        ‘exploring the themes of family, togetherness and renewal as the Spring season slowly
        ‘approaches. A trip to the August Park petting zoo has been arranged and a notice will be shared
        online to reach out to any parents/guardians who would like to attend and help organize the
        logistics of the school trip."
        img="waitingroom.png"
      />
      <div className="container px-5">
        <h2 className='text-center fw-bold'>E-News Letters</h2>
        <div className="container d-flex justify-content-between item-center">
          <p>News 09/09/22</p><Link to="/files/News.pdf" target="_blank" download>
            <img src="img/assets/download.png" alt="" srcSet="" /></Link>
        </div>
        <div className="container d-flex justify-content-between item-center">
          <p>E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021)</p>  <Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
        </div>
        <div className="container d-flex justify-content-between item-center">
          <p>E-NEWSLETTER OF PRE-PRIMARY DEPT. (MONTH: AUGUST 2020)</p>  <Link to="/files/E-NEWSLETTER PRIMARY DEPARTMENT ( MONTH- NOVEMBER 2021).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
        </div>
        <div className="container d-flex justify-content-between item-center">
          <p>E-NEWSLETTER OF MIDDLE & SECONDARY DEPT. (MONTH: JUNE-JULY 2020)</p>  <Link to="/files/NKBGS-NEWSLETTER OF MIDDLE & SECONDARY DEPARTMENT(MONTH--JUNE & JULY 2020).pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
        </div>
        <div className="container d-flex justify-content-between item-center">
          <p>E-NEWSLETTER OF PRE-PRIMARY DEPT. (MONTH: JULY 2020)</p>  <Link to="/files/July Newsletter.pdf" target="_blank" download><img src="img/assets/download.png" alt="" srcSet="" /></Link>
        </div>
      </div>
    </>
  )
}

export default Newsletter