import React from 'react';

import './Skills.css';
import WorkExperience from './WorkExperience';

import { Container, Row, Col, Card, CardGroup, Accordion, Button } from 'react-bootstrap';

import Networks from './networks.png';
import Web from './web.png';
import UI from './ui.png';
import Other from './other.png';

export default props => {
    return(
        <a name="about">
            <div className="skills">
                <Container>
                    <Row style={{ paddingTop: '8%', paddingBottom: '4%', textAlign: 'left' }}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h1 className="contact-name">Lichelle Gaerlan</h1>
                            <p className="contact-info">
                                <a className="email" href="mailto:lichellemaegaerlan@gmail.com">lichellemaegaerlan@gmail.com</a><br/>
                                (702) 302-2920
                            </p>
                            <button className="resume-button">Resume PDF</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {/* <div className="heading"> */}
                                <h1 className="skills-heading">Skills</h1>
                                {/* <h1 style={{ color: '#b3ada6', lineHeight: '20px' }}>&ndash;</h1> */}
                                <hr style={{ backgroundColor: '#CEB9B5', width: '60px', height: '0.5px' }}/>
                            {/* </div> */}
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '20px' }}>
                        <CardGroup>
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            <Card className="skills-card">
                                <Card.Img variant="top" src={Networks} />
                                <Card.Body>
                                    <Card.Text>
                                        <h1 className="skills-header">Computer Networking</h1>
                                        <p className="card-text">
                                            I am proficient with Cisco IOS, and have working experience
                                            configuring, installing, and troubleshooting Cisco devices. I also
                                            have extensive experience with data/fiber cabling, IP address management, 
                                            and automation scripting.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                        <Card className="skills-card">
                            <Card.Img variant="top" src={UI} />
                            <Card.Body>
                                <Card.Text className="card-text">
                                    <h1 className="skills-header">UI/UX Design</h1>
                                    <p className="card-text" style={{ fontSize: '56%' }}>
                                        I believe that well designed software products stem from
                                        the UX industry. I love designing elegant, engaging, and
                                        efficient product experiences alongside a beautiful user interface.
                                        <br/><br/>
                                        my process > 
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </Col> */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            <Card className="skills-card">
                                <Card.Img variant="top" src={Web} />
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        <h1 className="skills-header">Responsive Web Design</h1>
                                        <p className="card-text" style={{ fontSize: '60%' }}>
                                            Using ReactJS and HTML/CSS, I have found that it is pertinent to implement
                                            responsive web features that will allow the website to be mobile-friendly, flexible,
                                            and improve the overall user experience to increase visistor traffic.
                                            <br/><br/>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        
                        {/* Scripting card for iPad image */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            {/* <Card className="skills-card">
                                <Card.Img variant="top" src={Other} />
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        <h1 className="skills-header">Scripting</h1>
                                        <p className="card-text" style={{ fontSize: '56%' }}>
                                            I am able to perform basic automation scripting using Python. 
                                            Furthermore, I have experience using C++ and bash scripts.
                                            <br/><br/>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        {/* </Col> */}
                        </CardGroup>
                    </Row>
                </Container>
            </div>

            <WorkExperience />
        </a>
    );
}