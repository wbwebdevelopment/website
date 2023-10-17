interface serviceType {
    title: string,
    desc: string,
    cardColor: string,
    iconSrc: string,
    price: string | number,

}

export default function Service({title, desc, cardColor, iconSrc, price}: serviceType) {
  return (
    <a className="service-card" href="#contactFormTitle" style={{backgroundColor: cardColor}}>
        <div className="service-icon-wrapper">
            <img className="service-icon" src={iconSrc} alt={`Icon of ${title}`} />
            <div className="service-price">{price}</div>
        </div>
        <div className="service-content-wrapper">
            <h4 className="service-title">{title}</h4>
            <p className="service-desc">{desc}</p>
        </div>
        <div className="service-contact-wrapper">
            <span>Contact for more details</span>
            <img className="service-arrow" src="/img/icons/right-arrow.svg" alt="Right Arrow Icon" />
        </div>
    </a>
  )
}
