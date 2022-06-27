import styled from "styled-components"

export const rightVariant = {
  alignSelf: 'end',
  flexDirection: 'row-reverse'
}

const CardStyled = styled.div`
  display: flex;
  align-items: center;
  height: 400px;
  width: 400px;
  overflow: hidden;
  background: rgba(218, 218, 218, 0.3);
  border-radius: 35px;
  transition: all 0.4s ease-in-out;
  align-self: ${props  => props?.variant?.alignSelf};
  flex-direction: ${props => props?.variant?.flexDirection};

  &:hover{
    width: 800px;
  }
  /* &:hover .unhover-container{ visibility: visible; min-width: 400px; }
  &:hover .hover-container{ visibility: visible; min-width: 400px;} */
  .unhover-container{
    order: ${ props => props?.variant?.unhoverContainer?.order};
    display: flex;
    min-width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    height: 100%;
  }
  .card-img{
    height: 180.4px;
    width: 198.6px;
  }
  .card-title{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    text-align: center;
    color: #AFFC41;
    margin: 0;
    width: 82%;
  }
  .card-info{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    margin: 0;
  }
  .card-description{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #AFFC41;
    padding: 0 42px;
    text-align: center;
    min-width: 400px;
  }
  .hover-container{
    order: ${ props => props?.variant?.hoverContainer?.order};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    height: 100%;
  }
`
export default CardStyled