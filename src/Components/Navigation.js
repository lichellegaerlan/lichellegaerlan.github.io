import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

import { NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu isOpen={this.state.menuOpen} onStateChange={state => this.handleStateChange(state)}>
        <ul>
          <NavLink className="bruh" onClick={this.closeMenu} to="/">
            <li>Home</li>
          </NavLink>

          <NavLink className="bruh" onClick={this.closeMenu} to="/about">
            <li>About</li>
          </NavLink>

          {/* <Link className="bruh" onClick={this.closeMenu} to="/skills">
            <li>Skills</li>
          </Link> */}

          <Link className="bruh" onClick={this.closeMenu} to="/portfolio">
            <li>Portfolio</li>
          </Link>

          <Link className="bruh" onClick={this.closeMenu} to="/experience">
            <li>experience</li>
          </Link>

          <Link className="bruh" onClick={this.closeMenu} to="/contact">
            <li>Contact</li>
          </Link>

          {/* <li>
            <a className="bruh" href="/">Home</a><br/>
            <a className="bruh" href="/about">About</a><br/>
            <a className="bruh" href="/skills">Skills</a><br/>
            <a className="bruh" href="/experience">Work Experience</a><br/>
            <a className="bruh" href="/portfolio">Portfolio</a><br/>
          </li> */}
        </ul>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default Navigation;
