import styled from 'styled-components';

const FooterStyle = styled.footer`
  height: 147px;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 99;


  #footer-img{
    height: 58px;
    width: 150px;
    margin-left: 5rem;
  }
  .info-container{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    margin-right: 5rem;
  }
  .info-container >{
    font-size: 24px;
    font-weight: 700;
  }
  @media only screen and (max-width: 480px) {
    height: 80px;

    #footer-img{
    height: 40px;
    width: 100px;
    margin-left: 1.5rem;
    }
    .info-container >{
    font-size: 13px;
    font-weight: 700;
    }
    .info-container{
      margin-right: 1.5rem;
    }
    .info-email,.info-phone{
      margin: 0.3rem;
    }
  }
`

export default FooterStyle;