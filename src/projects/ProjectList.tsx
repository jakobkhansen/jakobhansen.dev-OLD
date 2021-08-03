import type { ProjectCategory } from "projects/ProjectsPage"
import React from "react"
import { Grid, Item, Segment } from "semantic-ui-react"
import ProjectBox from "./ProjectBox"

type ProjectListProps = { projects: ProjectCategory[] }

export default function ProjectList(props: ProjectListProps) {

    let projectBoxes = renderProjects(props.projects)

    return (
        <Grid centered className="ProjectGrid">
            <Item.Group link className="ProjectGroup" divided>{projectBoxes}</Item.Group>
        </Grid>
    )
}

function renderProjects(projects: ProjectCategory[]) {
    let buffer = [<Item></Item>]

    for (let category of projects) {
        buffer.push(<h1 style={{textAlign:"left"}}>{category.name}</h1>)
        for (let project of category.projects) {
            buffer.push(<ProjectBox project={project} />)
        }
    }

    buffer.push(<Item></Item>)

    return buffer
}
