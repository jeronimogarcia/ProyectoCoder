import React from 'react';
import FooterStyle from './FooterStyle'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <FooterStyle>
      <Logo id='footer-img'/>
      {/* <img id='footer-img' src={footerImg} alt='footer logo' /> */}
      <div className="info-container">
        <p className="info-email">podcastraiz@gmail.com</p>
        <p className="info-phone">+54 9 11 6464 5256</p>
      </div>
    </FooterStyle>
  )
}

export default Footer;
