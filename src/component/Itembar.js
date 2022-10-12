import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Itembar(props) {
    return (
        <>
            <div className="col-md-2 my-3 eitem ">
                <Link to={props.url === "" ? "/" : props.url} style={{ textDecoration: "none", marginLeft: "25px" }}><img src={props.img} alt="..." />
                    <h5 className='text-center text-light '>{props.title}</h5>
                </Link>
            </div>
        </>
    )
}
export default Itembar