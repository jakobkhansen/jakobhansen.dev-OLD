import React, { Component } from "react";
import { withRouter } from "react-router";
import { Menu } from "semantic-ui-react";

class NavBar extends Component<any> {
  handleItemClick = (e: any, { name }: any) => {
    this.props.history.push(name);
  };

  render() {
    const activeItem = this.props.history.location.pathname;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name="/home"
            active={activeItem === "/home" || activeItem === "/"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="/projects"
            active={activeItem === "/projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="/resume"
            active={activeItem === "/resume"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
export default withRouter(NavBar);
