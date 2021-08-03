import { Project } from "./ProjectsPage"
import { Item, Image, Grid, Segment } from "semantic-ui-react"



type ProjectBoxProps = { project: Project }

export default function ProjectBox(props: ProjectBoxProps): JSX.Element {

    let project = props.project

    let image = require(`resources/${project.image}`).default


    let inner = (
        <>
            <Item.Image size='small' bordered circular src={image} />

            <Item.Content verticalAlign="bottom">
                <Item.Header>{project.name}</Item.Header>
                <Item.Description>{project.description}</Item.Description>
                <Item.Extra>{project.time}</Item.Extra>
            </Item.Content>
        </>
    )

    let surrounding = (<Item className="ProjectBox">{inner}</Item>)

    // Check if this project should be clickable
    if (project.link != "") {
        surrounding = (<Item className="ProjectBox" as='a' href={project.link}>{inner}</Item>)
    }

    return surrounding
}
