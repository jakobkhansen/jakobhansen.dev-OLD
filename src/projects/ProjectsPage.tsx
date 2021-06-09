import ProjectNav from "projects/ProjectNav"
import raw from "resources/projects.json"
import ProjectList from "./ProjectList"

type ProjectCategory = { name: string, projects: Project[] }
type Project = { name: string, image: string, description: string }

function ProjectsPage() {
    let projects = getProjects()
    return (
        <div>
            <ProjectNav projects={projects}/>
            <ProjectList />
        </div>
    )
}

function getProjects() {
    return raw
}

export default ProjectsPage;
