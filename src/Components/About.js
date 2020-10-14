import React from 'react';

import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from './icon_thick.png';
import LinkedIn from './linkedin.svg';
import Github from './github.svg';
import Mail from './gmail.svg';

export default props => {
    return(
        <a name="home">
            <div className="about-me">
                <Container>
                    {/* <div className="about-me"> */}
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="about-img"><img src={Icon} width="175px" height="175px" /></div> <br/>
                            {/* <p>replace with character card</p> */}
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div className="hello-world">Hello World! I'm</div>
                                <div className="about-title">Lichelle Gaerlan</div>
                                <div className="about-subtitle">Computer Science Graduate / Network Technician</div>
                                <hr style={{ backgroundColor: '#588C7E' }}/>
                                <div className="about-text">
                                    I am a recent graduate from the University of Nevada, Las Vegas (UNLV)
                                    with a Bachelor's in Computer Science. I graduated with a concentration in
                                    Information Assurance and a minor in Mathematics. <br/><br/>
                                    During my time at UNLV, I worked as a Network Technician within
                                    UNLV's Network Development and Engineering department, which provided me foundational knowledge
                                    in computer networking concepts and its real-world applications. I am seeking opportunities
                                    in anything related to computer networking, computer security, and front-end design.
                                </div>
                                <br/>
                                <button className="b1">See My Work ></button>
                                <br/>
                            </Col>
                        </Col>
                    </Row>
                    {/* <Col xs={12} sm={12} md={12} lg={12}>
                        <Col className="center-col" xs={12} sm={12} md={12} lg={12}>
                            <div className="link-bar">
                                <img src={LinkedIn} height="15px" width="15px" className="link-img" />
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <img src={Github} height="15px" width="15px" className="link-img" />
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <img src={Mail} height="15px" width="15px" className="link-img" />
                            </div>
                        </Col>
                    </Col> */}
                    <Row></Row>
                    {/* </div> */}
                    </Container>
            </div>
        </a>
    );
}