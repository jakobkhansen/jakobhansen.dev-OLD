import ProjectNav from "projects/ProjectNav"
import raw from "resources/projects.json"
import ProjectList from "./ProjectList"
import "projects/ProjectsPage.css";

type ProjectCategory = { name: string, projects: Project[] }
type Project = { name: string, image: string, description: string }

function ProjectsPage() {
    let projects = getProjects()
    return (
        <div className="ProjectPage">
            <ProjectNav projects={projects}/>
            <ProjectList projects={projects}/>
        </div>
    )
}

function getProjects() {
    return raw
}

export default ProjectsPage;
