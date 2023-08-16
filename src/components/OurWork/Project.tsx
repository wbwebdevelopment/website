interface projectPropTypes{
    imgSrc: string,
    title: string,
    link: string
}

export default function Project(props: projectPropTypes) {
  return (
    <div className="project">
        <img src={props.imgSrc} alt={`Image of ${props.title}`} className="project-img" />
        <div className="project-title">{props.title}</div>
        <a href={props.link} target="_blank" className="project-link">Visit Site</a>
    </div>
  )
}
