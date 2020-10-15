import React from 'react';

import './Landing.css';

import { Container, Row, Col } from 'react-bootstrap';

import LinkedIn from './linkedin.png';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className="fade-in-about"><h1 id="about">Hi, My name is Lichelle</h1></div>
                        <div className="fade-in-sub"><h2 id="about-sub">I'm a designer, developer, and computer networks specialist</h2></div>
                    </Col>
                </Row>

                <Row xs={12} sm={12} md={12} lg={12}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <div className="landing-icons">
                        <img src={LinkedIn} alt="linkedin" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}