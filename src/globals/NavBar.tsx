import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Menu } from 'semantic-ui-react'


class NavBar extends Component<any> {
  state = { activeItem: '/home' }

  handleItemClick = (e : any, { name } : any) => {
      this.setState({ activeItem: name })
      this.props.history.push(name)
  }

  render() {
    const  activeItem = this.props.history.location.pathname

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='/home'
            active={activeItem === '/home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='/projects'
            active={activeItem === '/projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='/resume'
            active={activeItem === '/resume'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}
export default withRouter(NavBar)
