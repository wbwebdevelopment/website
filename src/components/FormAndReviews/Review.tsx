interface reviewProps{
    name: string,
    desc: string
}

export default function Review(props: reviewProps) {
  return (
    <div className="review">
        <div className="stars-wrapper">
            <img src="./img/icons/star.svg" alt="star icon" className="star" />
            <img src="./img/icons/star.svg" alt="star icon" className="star" />
            <img src="./img/icons/star.svg" alt="star icon" className="star" />
            <img src="./img/icons/star.svg" alt="star icon" className="star" />
            <img src="./img/icons/star.svg" alt="star icon" className="star" />
        </div>
        <span className="name">{props.name}</span>
        <span className="desc">{` - "${props.desc}"`}</span>
    </div>
  )
}
