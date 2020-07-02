import React from 'react';

import './WorkExperience.css';
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as WorkIcon } from './work.svg';
import { ReactComponent as SchoolIcon } from './school.svg';

export default props => {
    return(
        <a name="experience">
            <div className="work-experience">
                <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                {/* <div className="heading"> */}
                                    <h1 className="work-title">Work Experience</h1>
                                    {/* <h1 style={{ color: '#b3ada6', lineHeight: '20px' }}>&ndash;</h1> */}
                                    <hr style={{ backgroundColor: '#C9CEE9', width: '60px', height: '0.5px' }}/>
                                    <br/>
                                {/* </div> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1 className="work-heading">
                                    <b>
                                    Bachelor's of Science in Computer Science <br/>
                                    Concentration: Information Assurance, Minor: Mathematics
                                    </b>
                                </h1>
                                <p className="work-subtitle">
                                    University of Nevada, Las Vegas <br/><br/>
                                    Honors: Cum Laude <br/>
                                    {/* Activities/Socities: Tau Beta Pi (Engineering Honor Society) Vice President, 
                                    Society of Women's Engineers Vice President, Cybersecurity Club Workshop Trainer, 
                                    Academic Affairs Board Member <br/> */}
                                    Related Coursework: Computer Networks, Computer Security, Internet Security, Information Assurance, 
                                    Data Structures, Algorithm Analysis, Operating Systems, Software Product Design<br/>

                                    <hr style={{ backgroundColor: '#C9CEE9', width: '80%', height: '0.2px' }}/>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1 className="work-heading">
                                    <b>Network Technician</b>
                                </h1>
                                <p className="work-subtitle">
                                    UNLV Network Development and Engineering <br/><br/>
                                    ∙ Configuring, installing, and troubleshooting Cisco switches, voice gateways, uninterruptible power supplies (UPS), and wireless access points<br/>
                                    ∙ Cabling and tracing of data and fiber infrastructure<br/>
                                    ∙ Worked with customers to troubleshoot and resolve connectivity issues<br/>
                                    ∙ Created IP address reservations and DNS records using Infoblox<br/>
                                    ∙ Basic automation scripting to assist network engineers with projects<br/>

                                    <hr style={{ backgroundColor: '#C9CEE9', width: '80%', height: '0.2px' }}/>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1 className="work-heading">
                                    <b>Undergraduate Peer Mentor and Teaching Assistant</b>
                                </h1>
                                <p className="work-subtitle">
                                    UNLV College of Engineering <br/><br/>
                                    ∙ Worked with first-year and second-year computer science students to provide guidance and tutoring
                                    in the student’s classes and first-year seminar engineering projects. <br/>
                                    ∙ Projects included: Web application development with Google App Inventor,
                                    mobile application development with Android Studio, and drone programming in Python.

                                    <hr style={{ backgroundColor: '#C9CEE9', width: '80%', height: '0.2px' }}/>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <h1 className="work-heading">
                                    <b><i>view my resume</i></b>
                                </h1>
                            </Col>
                        </Row>
                </Container>
            </div>
        </a>
    );
}