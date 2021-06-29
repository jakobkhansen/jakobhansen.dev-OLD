
type ProjectProps = { image : string, text : string }

export default function Project(props : ProjectProps): JSX.Element {
    let project : Project = props.project
    console.log(project)
    return <div className="Project">{project.name}</div>
}
