import React from 'react'
import "./Fooder.css"
import logo from "../Components/Asstes/Logo 1.png"
import group from "./Asstes/Group 28.svg"
import social from "./Asstes/Frame 6.svg"
import bg from "./Asstes/Vector.svg"

const Fooder = () => {
  return (
    <div className='fobox' >
        <div className='mainbox'>
     <img src={bg} alt=""/>
        <div className='box1'>
            <img src={logo} />
        </div>
        <div className='box2'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='box3'>
            <img className='groupimg' src={group} alt="" />
            <img className='social' src={social} alt="" />

        </div>
        </div>
       
     
    </div>
  )
}

export default Fooder