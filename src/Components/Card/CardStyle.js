import styled from "styled-components"

export const rightVariant = {
  alignSelf: 'end',
  unhoverContainer: {
    gridColumn: '2/3',
  },
  hoverContainer: {
    gridColumn: '1/2',
  }
}

const CardStyled = styled.div`
  display:grid;
  grid-template-columns: 400px 376px;
  grid-template-rows: 400px;
  border-radius: 35px;
  justify-items: center;
  align-items: center;
  width: 400px;
  overflow: hidden;
  background: rgba(218, 218, 218, 0.3);
  transition: all 0.4s ease-in-out;
  align-self: ${props  => props?.variant?.alignSelf};

  &:hover{
    width: 776px;
  }
  &:hover .unhover-container{ grid-column: ${props  => props?.variant?.unhoverContainer?.gridColumn}; }
  &:hover .hover-container{ grid-column: ${props  => props?.variant?.hoverContainer?.gridColumn}; }
  .unhover-container{
    grid-column: 1/2;
    /* grid-column: ${ props => props?.variant?.unhoverContainer?.gridColumn}; */
    grid-row: 1/2;
    display: flex;
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
  }
  .hover-container{
    grid-column: '2/3';
    /* grid-column: ${ props => props?.variant?.unhoverContainer?.gridColumn}; */
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    height: 100%;
  }
`
export default CardStyled