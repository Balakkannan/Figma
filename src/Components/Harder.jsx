import React from 'react'
import './Harder.css'
import logo from "./Asstes/Logo.svg"
const Harder = () => {
  return (
    <div className='harder'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='homebox'>
                 <ul>
                    <li className='home'>Home</li>
                    <li>About Us</li>
                 </ul>
                 <header className='btnbox'>
                            <button className='btn'>Let's Connect</button>
                 </header>
            </div>
    </div>
  )
}

export default Harder