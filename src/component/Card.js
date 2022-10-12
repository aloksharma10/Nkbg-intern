import React from 'react'
import "../App.css"

function Card(props) {
    const { img, title, p1, p2, p3, p4, position, height } = props
    return (
        <>
            <div className="col-md-4 position-relative layer">
                <div className='rounded' style={{background: "#ffae8dc9"}}>
                    <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">{position}</span>
                    <img src={`img/${img}`} height={height} className="card-img-top rounded" alt="..." />
                    <div className="card-body" >
                        <h4 className="card-title text-center"><b>{title} </b> </h4>
                        <p className="m-0 text-center">{p1}</p>
                        <p className="m-0 text-center">{p2}</p>
                        <p className="m-0 text-center">{p3}</p>
                        <p className="m-0 text-center">{p4}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card