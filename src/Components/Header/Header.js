import React from 'react';
import Logo from "../Logo/Logo";
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
  return (
    <div className='header__Container'>
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  )
}

export default Header