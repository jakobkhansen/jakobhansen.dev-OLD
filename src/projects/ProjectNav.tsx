import { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Project, ProjectCategory } from "./ProjectsPage";

type ProjectNavProps = { projects: ProjectCategory[] };

export default class ProjectNav extends Component<ProjectNavProps, {}> {
  state = { activeItem: undefined };
  handleItemClick = (e: any, { name }: any) => {
    this.setState({ activeItem: name });
    // Handle clicks here
  };

  render() {
    let buffer = [];

    for (const category of this.props.projects) {
      buffer.push(this.renderCategory(category));
    }

    return (
      <Menu vertical style={{ width: "100%" }}>
        {buffer}
      </Menu>
    );
  }

  renderCategory(category: ProjectCategory) {
    let buffer = [];

    for (const project of category.projects) {
      buffer.push(this.renderProject(project));
    }

    return (
      <Menu.Item>
        <Menu.Header>{category.name}</Menu.Header>
        <Menu.Menu>{buffer}</Menu.Menu>
      </Menu.Item>
    );
  }

  renderProject(project: Project) {
    const { activeItem } = this.state;

    return (
      <Menu.Item
        name={project.name}
        active={activeItem === project.name}
        onClick={this.handleItemClick}
      ></Menu.Item>
    );
  }
}
