import React from 'react'

function Inversehoricard(props) {
    const {title, description, img , p1, p2, p3}= props

    return (
        <>
            <div className="p-3" style={{ backgroundColor: "#f4f0ec" }}>
                <div className="container my-5">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center">
                                <img src={`img/${img}`} className="img-fluid rounded-start p-2" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body ">
                                    <h1 className="card-title fw-bold">{title}</h1>
                                    <p className="card-text">{description}</p>
                                    <ul>
                                        <li>{p1}</li>
                                        <li>{p2}</li>
                                        <li>{p3}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Inversehoricard