import Project from "projects/Project"

export default function ProjectList(props : any) {
    let projects : Project[] = props.projects
    console.log(projects)

    let buffer = []

    for (const category of projects) {
        for (const project of category.projects) {
            buffer.push(<Project project={project} />)
        }
    }

    return <div>{buffer}</div>
}
