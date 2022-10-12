import React from 'react'

function Eitem(props) {
  const { imageUrl, title } = props

  return (
    <>
      <div className="col-md-4 my-1">
        <div className="card border border-0 text-bg-light ">
          <img src={imageUrl} className="card-img" alt="..." height={260}/>
          <div className="card-img-overlay image__overlay">
            <h5 className='text-center image__title'>{title}</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eitem