import FooterStyle from './FooterStyle'
import footerImg from '../../Images/Footer-img.svg'

const Footer = () => {
  return (
    <FooterStyle>
      <img id='footer-img' src={footerImg} alt='footer logo' />
    </FooterStyle>
  )
}

export default Footer
