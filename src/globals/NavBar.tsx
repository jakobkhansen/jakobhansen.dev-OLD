import React, { Component } from "react";
import { withRouter } from "react-router";
import { Menu } from "semantic-ui-react";

class NavBar extends Component<any> {
  handleItemClick = (e: any, { path }: any) => {
    this.props.history.push(path);
  };

  render() {
    const activeItem = this.props.history.location.pathname;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="Home"
            path="/home"
            active={activeItem === "/home" || activeItem === "/"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="About Me"
            path="/aboutme"
            active={activeItem === "/aboutme"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Projects"
            path="/projects"
            active={activeItem === "/projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Resume"
            path="/resume"
            active={activeItem === "/resume"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
export default withRouter(NavBar);
