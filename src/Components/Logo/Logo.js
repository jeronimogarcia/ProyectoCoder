import React from 'react';
import logoIzq from "../../Images/logoDer.svg"
import logoDer from "../../Images/logoIzq.svg"
import './Logo.css'

const Logo = () => {
  return (
    <div>
      <img src={logoDer} alt="logoRaiz" height='80px' className='logoDer'/>
      <img src={logoIzq} alt="logo" height='80px'/>
    </div>
  )
};

export default Logo;