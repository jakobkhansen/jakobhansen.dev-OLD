import type { ProjectCategory } from "projects/ProjectsPage"

type ProjectListProps = {projects : ProjectCategory[]}

export default function ProjectList(props : ProjectListProps) {
    return (
        <div>I am project list!</div>
    )
}
