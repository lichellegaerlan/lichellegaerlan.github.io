import React from 'react';

import './Landing.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// import Landing from './landing.png';
import LandingTest from './landing-test.png';
import LandingPortfolio from './LandingPortfolio';
import LightContact from './LightContact.js';

export default props => {
    return(
        <div>
            <div className="landing">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {/* <img src={Landing} className="landing-image" alt="profile" /> */}
                            <img src={LandingTest} className="landing-image" alt="profile" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="home-link-container">
                                <div className="fade-in-about">
                                    <Link className="home-links" to="/about">About</Link>
                                    <Link className="home-links" to="/portfolio">Portfolio</Link>
                                    <Link className="home-links" to="/experience">Experience</Link>
                                    <Link className="home-links" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* <h1 className="portfolio-title">Portfolio</h1> */}
            {/* <Portfolio /> */}
            <LandingPortfolio />
            <LightContact />
        </div>
    );
}