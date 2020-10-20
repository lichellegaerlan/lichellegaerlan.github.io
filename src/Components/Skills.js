import React from 'react';

import './Skills.css';
import WorkExperience from './WorkExperience';

import { Container, Row, Col, Card, CardGroup, Accordion, Button } from 'react-bootstrap';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Collapsible from 'react-collapsible';


import Networks from './networks.png';
import Web from './web.png';
import UI from './ui.png';
import Other from './other.png';

export default props => {
    return(
        <a name="about">
            <div className="skills">
                <Container>
                    <Row style={{ paddingTop: '8%', paddingBottom: '4%'}}>
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
                        </Col>
                    </Row> */}

                    <Row style={{ paddingTop: '20px' }}>
                        <CardGroup>
                            <Card className="skills-card">
                                <Card.Img variant="top" src={Networks} />
                                <Card.Body>
                                    <Card.Text>
                                        <h1 className="card-title">Computer Networking</h1>
                                        {/* <p className="card-text">
                                            I am proficient with Cisco IOS, and have working experience
                                            configuring, installing, and troubleshooting Cisco devices. I also
                                            have extensive experience with data/fiber cabling, IP address management, 
                                            and automation scripting.
                                        </p> */}

                                        <ExpansionPanel style={{ boxShadow: "none" }}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff", justifyContent: "center" }}>
                                                <h1 className="card-sub">+ Skills</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                Troubleshoot customer's network connectivity <br/>
                                                Configure and install Cisco devices <br/>
                                                Data and fiber infrastructure cabling <br/>
                                                IP address management <br/>
                                                DNS reservations <br/>
                                                Technical documentation of Angular JS web applications <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Tools</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                Cisco Prime <br/>
                                                FootPrints Ticketing System <br/>
                                                Infoblox IP Management System <br/>
                                                Wireshark <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Technologies</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                Cisco IOS <br/>
                                                Juniper IOS <br/>
                                                Angular JS <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="skills-card">
                                <Card.Img variant="top" src={UI} />
                                <Card.Body>
                                    <Card.Text>
                                        <h1 className="card-title">UI/UX Design</h1>
                                        {/* <p className="card-text">
                                            I believe that well designed software products stem from
                                            the UX industry. I love designing elegant, engaging, and
                                            efficient product experiences alongside a beautiful user interface.
                                            <br/><br/>
                                            my process > 
                                        </p> */}

                                        <ExpansionPanel style={{ boxShadow: "none" }}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff", justifyContent: "center" }}>
                                                <h1 className="card-sub">+ Skills</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                User Interviews <br/>
                                                Persona Development <br/>
                                                Information Architecture <br/>
                                                Wireframing <br/>
                                                Prototyping <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Tools</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                Paper and Pencil <br/>
                                                Procreate <br/>
                                                Figma <br/>
                                                Invision Studio (beginner) <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Technologies</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">

                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="skills-card">
                                <Card.Img variant="top" src={Web} />
                                <Card.Body>
                                    <Card.Text>
                                        <h1 className="card-title">Responsive Web Design</h1>
                                        {/* <p className="card-text">
                                            Using ReactJS and HTML/CSS, I have found that it is pertinent to implement
                                            responsive web features that will allow the website to be mobile-friendly, flexible,
                                            and improve the overall user experience to increase visistor traffic.
                                            <br/><br/>
                                        </p> */}
                                        <ExpansionPanel style={{ boxShadow: "none" }}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff", justifyContent: "center" }}>
                                                <h1 className="card-sub">+ Skills</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Tools</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                Visual Studio Code <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel style={{ boxShadow: "none"}}>
                                            <ExpansionPanelSummary className="card-sub" style={{ height: "0px", borderColor: "#ffffff" }}>
                                                <h1 className="card-sub">+ Technologies</h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className="card-text">
                                                HTML5/CSS3 <br/>
                                                JavaScript <br/>
                                                React JS <br/>
                                                Angular JS <br/>
                                                Node.js (beginner) <br/>
                                                C++ <br/>
                                                Python (beginner) <br/>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
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