import React from 'react'

function Horicariimg(props) {
    const { title, description, img, p1, p2, p3, sourcetitle } = props
    return (
        <>
            <div className="p-3" style={{ backgroundColor: "#f4f0ec" }}>
                <div className="container my-2">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title fw-bold" style={{ marginLeft: "10px" }}>{title}</h1>
                                    <p className="card-text pd-5">{description}</p>
                                    <p className="card-text pd-5">{p1}</p>
                                    <p className="card-text pd-5">{p2}</p>
                                    <p className="card-text pd-5">{p3}</p>
                                </div>
                                <figcaption className="float-end px-2">
                                    <cite title="Source Title text-muted">{sourcetitle}</cite>
                                </figcaption>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                                <img src={`img/${img}`} className="img-fluid rounded-start p-2" style={{ width: "-webkit-fill-available" }} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Horicariimg