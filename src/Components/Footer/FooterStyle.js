import styled from 'styled-components';

const FooterStyle = styled.footer`
  height: 147px;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`

export default FooterStyle;