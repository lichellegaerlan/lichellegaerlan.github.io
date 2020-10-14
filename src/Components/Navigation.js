import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

class Navigation extends React.Component {
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default Navigation;

// import React from 'react';

// import { slide as Menu } from 'react-burger-menu';

// import './Navigation.css';

// class Navigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuOpen: false,
//     };
//   }

//   handleStateChange = state => {
//     this.setState({ menuOpen: state.isOpen });
//   };

//   closeMenu = () => {
//     this.setState({ menuOpen: false });
//   };

//     render() {
//         return (
//             <Menu
//                 isOpen={this.state.menuOpen}
//                 onStateChange={state => this.handleStateChange(state)}
//             >
//                 <ul>
//                     <li>
//                         <a id="about" onClick={this.closeMenu} href="/about">
//                             about
//                         </a>
//                     </li>

//                     <li>
//                         <a id="experience" onClick={this.closeMenu} href="/experience">
//                             work experience
//                         </a>
//                     </li>

//                 </ul>
//             </Menu>
//         )
//     }
// }

// export default Navigation;

// export default props => {
//     return(
//         <div>
//             <Navbar className="nav" expand="md">
//                 {/* this part is where the logo will go */}
//                 {/* <Navbar.Brand href="#home">Lichelle Gaerlan</Navbar.Brand> */}
//                 <Navbar.Toggle aria-controls="basic-navbar-nav">
//                     <span><img src={Menu} /></span>
//                 </Navbar.Toggle>
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto">
//                         <Nav.Link href="#home" id="nav-link">Home</Nav.Link>
//                         {/* <Nav.Link href="#about" id="nav-link">About</Nav.Link> */}
//                         <Nav.Link href="#experience" id="nav-link">Work Experience</Nav.Link>
//                         <Nav.Link href="#portfolio" id="nav-link">Portfolio</Nav.Link>
//                         <Nav.Link href="#contact" id="nav-link">Contact</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>

//     );
// }