import ProjectNav from "projects/ProjectNav"
import projects from "resources/projects.json"
import ProjectList from "./ProjectList"
import "projects/ProjectsPage.css";

export type ProjectCategory = { name: string, projects: Project[] }
export type Project = { name: string, image: string, description: string, time : string, link : string}

function ProjectsPage() {
    let projects = getProjects()
    return (
        <div className="ProjectsPage">
            <ProjectList projects={projects} />
        </div>
    )
}

function getProjects() : ProjectCategory[] {
    //for (let category of projects) {
        //for (let project of category.projects) {
            //project.image = require(project.image)
        //}
    //}
    return projects
}

export default ProjectsPage;
