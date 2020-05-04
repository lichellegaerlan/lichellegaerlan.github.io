import React from 'react';

import './WorkExperience.css';
import { Container, Row, Col } from 'react-bootstrap';

import Dot from './dot.svg';

export default props => {
    return(
        <a name="experience">
            <div className="work-experience">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <p className="work-title">Work Experience</p>
                        </Col>
                        <div className="divider2"></div>
                    </Row>
                    <Row>
                        <div className="hide">
                            <Col xs={4} sm={4} md={4} lg={4}>
                                <center>
                                    <img src={Dot} height="5px" width="5px" className="dot" />
                                    <div className="vertical-div"></div>
                                </center>
                            </Col>
                        </div>
                        <Col xs={12} sm={12} md={9} lg={9}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            {/* <div className="description"> */}
                            <h1 id="company">
                                    <b>Student Network Technician</b><br/>
                                </h1>
                                <h1 id="position">
                                    UNLV Network Development and Engineering (April 2018 to Present)
                                </h1>
                                <h3 id="company-text">
                                • Configuring, installing, and troubleshooting Cisco switches, voice gateways, uninterruptible <br/>
                                  power supplies (UPS), and wireless access points <br/>
                                • Cabling and tracing of data and fiber infrastructure <br/>
                                • Worked with customers to troubleshoot and resolve connectivity issues <br/>
                                • Created IP address reservations and DNS records using Infoblox <br/>
                                • Created topology diagrams of campus network <br/>
                                • Maintained inventory of network devices and documentation of the status of all intermediate <br/>
                                  distribution frames (~200 IDF’s) on campus <br/>
                                • Wrote documentation for technical procedures and scripts <br/>
                                • Basic automation scripting to assist network engineers with ongoing projects <br/>  
                                </h3>
                            {/* </div> */}
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </a>
    );
}