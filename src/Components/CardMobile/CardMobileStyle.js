import styled from "styled-components"

const CardMobileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 260px;
  background: rgba(218, 218, 218, 0);
  border-radius: 35px;
  perspective: 1000px;
  position: relative;
  
  /* &:hover .mcard-inner {
    transform: rotateY(180deg);
  }
  &:hover .mcard-inner-front{
    visibility: hidden;
    order: 2;
  }
  &:hover .mcard-inner-back{
    visibility: visible;
    order: 1;
    font-weight: 500;
    font-size: 15px;
    color: #AFFC41;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
  }
  &:hover .mcard-inner-front{
    visibility: hidden;
    order: 2;
  }
  
  &:hover .rotate-button{
    transform: rotateZ(-180deg)
  } */
  
  .rotate-button{
    position: absolute;
    bottom: 25px;
    background: #0C0C0C;
    width: 36px;
    height: 36px;
    border: 2px solid #AFFC41;
    border-radius: 10px;
    transition: transform 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 4s ease-in-out;
  }
  .rotate-button .rot{
    transform: rotateZ(-180deg);
  }
  .mcard-inner-front{
    min-width: 260px;
    min-height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 35px;
  }
  .mcard-card-front-img{
    height: 100px;
    transform: rotateY(0deg);
  }
  .mcard-card-front-title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
    color: #AFFC41;
  }
  .mcard-inner-back{
    min-width: 260px;
    min-height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 35px;
    padding: 0 20px;
  }
  .mcard-inner-back-description{
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    color: #AFFC41;
  }
`
export default CardMobileStyled