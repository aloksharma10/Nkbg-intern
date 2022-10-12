import React from 'react'

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#579cd8", fontSize: "20px" }}>
        <div className='text-light text-center'>
          Copyrights © 2013-22 N.K.Bagrodia Global School. All Rights Reserve
        </div>
      </div>
      <div className='d-flex justify-content-around pt-2' style={{background: "#579cd4" , borderTop: "1px solid white"}}>
        <p className='text-light'>
          Designed & Developed By Alok Sharma
        </p>
        <p>
          <a className="mx-2 text-dark" href="https://github.com/Aloksharma10" role="button"><i className="fa fa-github" style={{ fontSize: "24px" }}></i></a>
          <a className="mx-2 text-primary" href="https://www.linkedin.com/in/alok-sharma10/" role="button">
            <i className="fa fa-linkedin-square" style={{ fontSize: "24px" }}></i></a>
        </p>
      </div>
    </>
  )
}

export default Footer