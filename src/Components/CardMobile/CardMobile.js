import CardMobileStyled from './CardMobileStyle'
import imgBtn from '../../Images/cards/imgBtn.svg'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
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
        </div>

        <div className={`mcard-inner-back`}>
          <h4 className='mcard-inner-back-description'>{description}</h4>
        </div>
      </ReactCardFlip>
      <AnimatePresence>
      {!isFlipped && 
      <motion.button className='rotate-button' onClick={handleClick}
        transition={{ type: "tween", duration: 0.5}} 
      >
          <img className='rotate-button-img' src={imgBtn} alt='rotate to see more' />
      </motion.button>}
        
      {isFlipped && 
      <motion.button className='rotate-button' onClick={handleClick}  
        animate={{rotate: -180 }} 
        initial={{rotate: 0}} 
        transition={{ type: "tween", duration: 0.5}} 
      >
          <img className='rotate-button-img' src={imgBtn} alt='rotate to see more' />
      </motion.button>

      }
      </AnimatePresence>

    </CardMobileStyled>
  )
}

export default CardMobile