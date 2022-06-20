import CardStyled from "./CardStyle"
import { rightVariant } from "./CardStyle"

const Card = ({img, title, description,right}) => {
  return (
    <CardStyled variant={right ? rightVariant : ''}>
      <div className="unhover-container">
        <img className="card-img" src={img} alt="podcast" />
        <h3 className="card-title">{title}</h3>
        <h6 className="card-info">Mas info</h6>
      </div>
      
      <div className="hover-container">
        <h4 className="card-description">{description}</h4>
      </div>

    </CardStyled>
  )
}

export default Card