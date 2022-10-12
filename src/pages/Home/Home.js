import React from 'react'
import Card from '../../component/Card'
import Eitem from '../../component/Eitem'
import "../../App.css"
import Itembar from '../../component/Itembar'
import Whatsnew from '../../component/Whatsnew'

function Home() {
  return (
    <div>
      <div>
        <div className="breaking-news" style={{ backgroundColor: "rgb(188 74 10 / 95%)" }}>
          {/* eslint-disable-next-line */}
          <marquee className="text-light" behavior="alternate" scrollamount="4">FEW SEATS ARE AVAILABLE FOR CLASS PRE-SCHOOL &amp; XI (SCIENCE-COMMERCE-HUMANITIES). KINDLY COLLECT REGISTRATION FORMS AVAILABLE AT GATE NO.-1 FROM 9AM-1PM.</marquee>
        </div>
      </div>
      <div className="d-flex justify-content-center border border-light" style={{ backgroundColor: "rgb(188 74 10 / 92%)" }}>
        <div className="row itemsbar d-flex ">
          <Itembar img="img/assets/DOE-.png" url="/our-vision" title="About Us" />
          <Itembar img="img/assets/Admission.png" url="/" title="Admission Help" />
          <Itembar img="img/assets/enquiry.png" url="/" title="Enquiry" />
          <Itembar img="img/assets/registration.png" url="/" title="Online Registration" />
          <div className="col-md-2 my-3 eitem ">
            <a href='https://nkbglobal.entab.info/Logon/Logon' target={'_blank'} style={{ textDecoration: "none", marginLeft: "25px" }} rel="noreferrer"><img src='img/assets/user.png' alt="..." />
              <h5 className='text-center text-light '>ERP Login</h5>
            </a>
          </div>
          <Itembar img="img/assets/parent.png" url="/" title="Parents Portal" />
        </div>
      </div>
      <div >
        <div className="container">
          <h3 className='text-center display-6 ' style={{ fontWeight: "600" }}>Our Toppers</h3>
          <h4 className='text-center'>We are Proud to Our Academic Achievement <b>Class 12th 2021-2022</b></h4>
          <div className="row p-2">
            <Card title="Bhumika" position="1st" p1="Geography-100" p2="Psychology-100" p3="History-99" p4="English-94" img="1stTopper.png" height="375" />
            <Card title="Khushi" position="2nd" p1="Geography-100" p2="Psychology-100" p3="Political Science-100" p4="" img="2ndTopper.png" height="375" />
            <Card title="Ayush Aggarwal" position="3rd" p1="Eco-100" p2="Accountancy-99" p3="Mathematics-96" p4="Business Stud-94" img="3rdTopper.png" height="375" />
          </div>
        </div>
      </div>
      <Whatsnew />

      <div className="d-flex justify-content-center pb-2" style={{ backgroundColor: "rgb(188 74 10 / 92%)" }}>
        <div className="row itemsbar d-flex ">
          <Itembar img="img/assets/schoolcircular.png" url="/school-circular" title="School Circular" />
          <div className="col-md-2 my-3 eitem ">
            <a href='https://www.cbse.gov.in/cbsenew/examination_Circular.html' target={'_black'} style={{ textDecoration: "none", marginLeft: "25px" }}><img src='img/assets/CBSE-CIRCULAR-.png' alt="..." />
              <h5 className='text-center text-light '>CBSE & DOE Circular</h5>
            </a>
          </div>
          <Itembar img="img/assets/rules and regulation.png" url="/rules-regulation" title="Rule & Regulation" />
          <Itembar img="img/assets/news.png" url="/emagazine" title="E-Newsletter" />
          <Itembar img="img/assets/club.png" url="/club" title="Club" />
          <div className="col-md-2 my-3 eitem ">
            <a href='https://www.google.com/maps/place/N.K.+Bagrodia+Global+School/@28.5928185,77.0278478,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1aba40000001:0x7951c900e92031af!8m2!3d28.5928138!4d77.0300365' target={'_black'} style={{ textDecoration: "none", marginLeft: "25px" }}><img src='img/assets/map.png' alt="..." />
              <h5 className='text-center text-light '>Get Direction</h5>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-5 my-3 ">
        <h3 className='text-center display-6' style={{ fontWeight: "600" }}>Our Gallery</h3>
        <div className="row">
          <iframe width="560" height="415" src="https://www.youtube.com/embed/kPQOicI5olY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <Eitem imageUrl="img/smartclasses.png" title="Smart Class" />
          <Eitem imageUrl="img/AI Lab.png" title="AI LAB" />
          <Eitem imageUrl="img/computerlab.png" title="Computer LAB" />
          <Eitem imageUrl="img/libarary.jpeg" title="Library" />
          <Eitem imageUrl="img/bus.png" title="GPS Enabled Bus" />
          <Eitem imageUrl="img/exibation.png" title="Exhibition Hall" />
          <Eitem imageUrl="img/swings.png" title="Swings" />
          <Eitem imageUrl="img/football.png" title="Sports" />
          <Eitem imageUrl="img/medicallab.png" title="Medical Lab" />
        </div>
      </div>
    </div>
  )
}

export default Home
