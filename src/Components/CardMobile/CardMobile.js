import CardMobileStyled from './CardMobileStyle'
import imgBtn from '../../Images/cards/imgBtn.svg'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const CardMobile = ({img, title, description}) => {
  const [isFlipped, setIsTouched] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setIsTouched(prevState => !prevState);
  }
  
  return (
    <CardMobileStyled >
      <ReactCardFlip className='mcard-inner' isFlipped={isFlipped} flipDirection="horizontal">
        <div className={`mcard-inner-front`}>
          <img className="mcard-card-front-img" src={img} alt={title}/>
          <h3 className='mcard-card-front-title'>{title}</h3>
          {/* <button className='rotate-button' onClick={handleClick}>
            <img className='rotate-button-img' src={imgBtn} alt='rotate to see more' />
          </button> */}
        </div>

        <div className={`mcard-inner-back`}>
          <h4 className='mcard-inner-back-description'>{description}</h4>
        </div>
      </ReactCardFlip>
      
      <button className='rotate-button' onClick={handleClick}>
            <img className='rotate-button-img rot' src={imgBtn} alt='rotate to see more' />
      </button>




      {/* <div className={`mcard-inner`}>
        <div className={`mcard-inner-front`}>
          <img className="mcard-card-front-img" src={img} alt={title}/>
          <h3 className='mcard-card-front-title'>{title}</h3>
        </div>
        <div className={`mcard-inner-back`}>
          <h4 className='mcard-inner-back-description'>{description}</h4>
        </div>
      </div>
      <button className='rotate-button' >
        <img className='rotate-button-img' src={imgBtn} alt='rotate to see more' />
      </button> */}
    </CardMobileStyled>
  )
}

export default CardMobile