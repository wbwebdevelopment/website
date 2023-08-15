interface pointPropTypes{
    title: string
}

export default function Point(props: pointPropTypes) {
  return (
    <div className="point">
        <img src="./img/icons/checkmark.svg" alt="checkmark image" />
        <span>{props.title}</span>
    </div>
  )
}
