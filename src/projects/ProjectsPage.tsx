import projects from "resources/projects.json"
import ProjectList from "./ProjectList"
import "projects/ProjectsPage.css";

export type ProjectCategory = { name: string, projects: Project[] }
export type Project = { name: string, image: string, description: string, time : string, link : string}

function ProjectsPage() {
    return (
        <div className="ProjectsPage">
            <ProjectList projects={projects} />
        </div>
    )
}


export default ProjectsPage;
