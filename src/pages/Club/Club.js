import React from 'react'
import Overlapdiv from '../../component/Overlapdiv'
import Eitem from '../../component/Eitem'
import NavforHorizontalcard from '../../component/NavforHorizontalcard'

function Club() {
    return (
        <>
            <Overlapdiv />
            <NavforHorizontalcard />
            <div className="container px-5 my-3 ">
                <h3 className='text-center display-6' style={{ fontWeight: "600" }}>Our Club</h3>
                <div className="row">
                    <Eitem imageUrl="img/natureclub.png" title="NATURE CLUB" />
                    <Eitem imageUrl="img/technoclub.png" title="TECHNO CLUB" />
                    <Eitem imageUrl="img/danceclub.png" title="DANCE CLUB" />
                    <Eitem imageUrl="img/readingclub.png" title="READING CLUB" />
                    <Eitem imageUrl="img/artclub.png" title="ART CLUB" />
                    <Eitem imageUrl="img/yoga.png" title="YOGA CLUB" />
                    <Eitem imageUrl="img/music.jpeg" title="MUSIC CLUB" />
                    <Eitem imageUrl="img/football.png" title="SPORTS CLUB " />
                    <Eitem imageUrl="img/helpclub.png" title="HELP CLUB" />
                </div>
            </div>
        </>
    )
}

export default Club