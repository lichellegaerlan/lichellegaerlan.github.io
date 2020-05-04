import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';

export default props => {
    return(
        <div>
            <Navbar className="nav" expand="lg">
                {/* this part is where the logo will go */}
                {/* <Navbar.Brand href="#home">Lichelle Gaerlan</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" id="nav-link">Home</Nav.Link>
                        <Nav.Link href="#about" id="nav-link">About</Nav.Link>
                        <Nav.Link href="#about" id="nav-link">Work Experience</Nav.Link>
                        <Nav.Link href="#portfolio" id="nav-link">Portfolio</Nav.Link>
                        <Nav.Link href="#contact" id="nav-link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}