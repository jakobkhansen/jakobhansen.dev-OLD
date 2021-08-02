
type ProjectProps = { image: string, text: string }

export default function Project(props : ProjectProps): JSX.Element {
    return <div className="Project">{props.text}</div>
}
