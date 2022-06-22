import CardMobileStyled from './CardMobileStyle'
import imgBtn from '../../Images/cards/imgBtn.svg'

const CardMobile = ({img, title, description}) => {
  // const [isTouched, setIsTouched] = useState(false)
  return (
    <CardMobileStyled >
      <div className={`mcard-inner`}>
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
      </button>
    </CardMobileStyled>
  )
}

export default CardMobile