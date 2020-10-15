import React from 'react';

import './Landing.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Landing from './landing.png';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row className="pink-pls">
                    {/* <Col xs={12} sm={12} md={4} lg={4}>
                        <div className="fade-in-about"><h1 id="about">Hi, My name is Lichelle</h1></div>
                        <div className="fade-in-sub"><h2 id="about-sub">I'm a designer, developer, and computer networks specialist</h2></div>
                    </Col> */}
                    <Col xs={12} sm={12} md={12} lg={12}>
                        {/* <div className="fade-in-about"><h1 id="about">Hi, My name is Lichelle</h1></div>
                        <div className="fade-in-sub"><h2 id="about-sub">I'm a designer, developer, and computer networks specialist</h2></div> */}
                        <img src={Landing} height="350px" width="290px" />
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="home-link-container">
                            <Link className="home-links" to="/about">About</Link>
                            <Link className="home-links" to="/experience">Experience</Link>
                            <Link className="home-links" to="/portfolio">Portfolio</Link>
                            <Link className="home-links" to="/contact">Contact</Link>
                        </div>
                    </Col>
                </Row>

                {/* <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="home-link-container">
                            <Link className="home-links" to="/about">About</Link>
                            <Link className="home-links" to="/experience">Experience</Link>
                            <Link className="home-links" to="/portfolio">Portfolio</Link>
                            <Link className="home-links" to="/contact">Contact</Link>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}