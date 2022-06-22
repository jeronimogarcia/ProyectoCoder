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
  
  &:hover .mcard-inner {
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
  }
  
  .mcard-inner{
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
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
  }
  .mcard-inner-front{
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .mcard-card-front-img{
    height: 100px;
    transform: rotateY(0deg);
  }
  .mcard-card-front-title{
    font-weight: 700;
    font-size: 24px;
    color: #AFFC41;
  }
  .mcard-inner-back{
    visibility: hidden;
    transform: rotateY(180deg);
    min-height: 260px;
    min-width: 260px;
  }
`
export default CardMobileStyled