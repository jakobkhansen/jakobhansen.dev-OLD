import ProjectNav from "projects/ProjectNav"
import projects from "resources/projects.json"
import ProjectList from "./ProjectList"
import "projects/ProjectsPage.css";

export type ProjectCategory = { name: string, projects: Project[] }
export type Project = { name: string, image: string, description: string }

function ProjectsPage() {
    let projects = getProjects()
    return (
        <div className="ProjectsPage">
            <ProjectNav projects={projects}/>
            <ProjectList projects={projects} />
        </div>
    )
}

function getProjects() : ProjectCategory[] {
    return projects
}

export default ProjectsPage;
