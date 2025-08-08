import React from 'react'
import backgroundimg from "./Asstes/Rectangle 87.png"
import "./Firdtpage.css"
import txtimg from "./Asstes/1.svg"
import txtimg1 from "./Asstes/2.svg"
import Polygon from "./Asstes/Polygon.svg"
import {useState} from 'react'
import scaleimg from "./Asstes/Scoleimg.svg"
import { useRef } from 'react'
import Rightarrow from "./Asstes/Right Arrow.svg"
import Leftarrow from "./Asstes/Left Arrow.svg"
 import Frame from "./Asstes/Frame 6.svg"

const Firstpage = () => {
    const scrollref =useRef(null);
    let [scalimg,setScalimg]= useState([
        {image:scaleimg},
        {image:txtimg1},
        {image:Frame}

    ])
   const scroll = (direction) => {
    if (scrollref.current) {
        const scrollAmount = 300;
        scrollref.current.scrollBy({
            top: 0,
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            right: direction === 'right' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
};

  return (
    <div className='Mainbox'>
        <img src={backgroundimg} alt="" />
        <div className='box'>
            <div className='txtbox'>
                <img src={txtimg} alt="" className='txtimag1' />
                <img src={txtimg1} alt=""  className='txtimag2'/>

            </div>

        <div className='imgbox'>
    <img src={Polygon} className='polygon' />
    <div className='scroll-controls'>
        <img src={Leftarrow} onClick={() => scroll('left')} alt="" style={{ height: "50px", width: "50px", marginTop:"50px", position:"relative" }} />
        <div className='imgbox1' ref={scrollref}>
            {scalimg.map((box, index) => (
                <img src={box.image} alt="" key={index} className='scroll-image' />
            ))}
        </div>
        <img src={Rightarrow} onClick={() => scroll('right')} alt="" style={{ height: "50px", width: "50px", marginLeft: "50px" }} />
    </div>
</div>

            
        </div>
    </div>
  )
}

export default Firstpage