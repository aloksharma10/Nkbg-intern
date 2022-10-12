import React from 'react'
import Overlapdiv from '../../component/Overlapdiv'

function Contactus() {
  return (
    <>
      <Overlapdiv />
      <div className="p-3" style={{ backgroundColor: "#f4f0ec" }}>
        <div className="container my-5">
          <div className="card">
            <div className="row">
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title fw-bold" style={{ marginLeft: "10px" }}>Contact Us</h1>
                  <p className="card-text "><b> N. K. Bagrodia Global School</b><br />
                    SECTOR-17, PHASE-II, DWARKA,<br />
                    NEW DELHI- 110078 (INDIA)<br /><br />
                    Phone: +91-11-42801001, 42801002<br />
                    Mobile: +91- 9818420591<br /><br />
                    Email:  nkbglobalschool@gmail.com<br />
                    Website: www.nkbglobalschool.com</p>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <img src="img/building.png" className="img-fluid rounded-start p-2" alt="..." />
              </div>
            </div>
          </div>
        </div>
      <div className="container text-center">
        <h3 className="fw-bold mb-3" >Get Direction</h3>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2320770516317!2d77.0300365!3d28.592813799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aba40000001%3A0x7951c900e92031af!2sN.K.%20Bagrodia%20Global%20School!5e0!3m2!1sen!2sin!4v1663845542549!5m2!1sen!2sin" width="1000" height="250" style={{ "border": "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </>
  )
}

export default Contactus