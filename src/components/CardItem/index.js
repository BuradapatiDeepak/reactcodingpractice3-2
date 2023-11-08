import './index.css'

const CardItem = props => {
  const {cardsList} = props // Use cardsList here
  const {title, description, imgUrl, className} = cardsList // Use cardsList here

  return (
    <li className={className}>
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image">
          <img alt={title} src={imgUrl} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
