import React from 'react';
import FooterStyle from './FooterStyle'
import footerImg from '../../Images/Footer-img.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <img id='footer-img' src={footerImg} alt='footer logo' />
      <div className="info-container">
        <p className="info-email">podcastraiz@gmail.com</p>
        <p className="info-phone">+54 9 11 6464 5254</p>
      </div>
    </FooterStyle>
  )
}

export default Footer;
