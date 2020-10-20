import React from 'react';

import './Skills.css';
import WorkExperience from './WorkExperience';

import { Container, Row, Col, Card, CardGroup, Accordion, Button } from 'react-bootstrap';

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

                    {/* <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h1 className="contact-name">Skills</h1>
                            <hr style={{ backgroundColor: '#CEB9B5', width: '60px', height: '0.5px' }}/>
                        </Col>
                    </Row> */}

                    <Row style={{ paddingTop: '20px' }}>
                        <CardGroup>
                            <Card className="skills-card">
                                <Card.Title><h1 className="card-title">Skills</h1></Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <p className="card-text">
                                            Computer Networking <br/>
                                            Responsive Frontend Development <br/>
                                            UI/UX Design <br/>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="skills-card">
                                <Card.Title><h1 className="card-title">Technologies</h1></Card.Title>
                                <Card.Body>
                                    <Card.Text className="card-text">
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

                            <Card className="skills-card">
                                <Card.Title><h1 className="card-title">Tools</h1></Card.Title>
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        <p className="card-text" style={{ fontSize: '60%' }}>
                                            Using ReactJS and HTML/CSS, I have found that it is pertinent to implement
                                            responsive web features that will allow the website to be mobile-friendly, flexible,
                                            and improve the overall user experience to increase visistor traffic.
                                            <br/><br/>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Row>
                </Container>
            </div>

            <WorkExperience />
        </a>
    );
}