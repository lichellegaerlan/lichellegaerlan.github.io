import React from 'react';

import './Skills.css';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

import Test from './test.jpg';
import Networks from './networks.png';
import Web from './web.png';
import UI from './ui.png';
import Other from './other.png';

export default props => {
    return(
        <a name="about">
            <div className="skills">
                <Container>
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
                                    <Card.Text className="card-text">
                                        &ndash;&ndash;<br/>
                                        Computer Networking
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            <Card className="skills-card">
                                <Card.Img variant="top" src={Web} />
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        &ndash;&ndash;<br/>
                                        Responsive Web Design
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            <Card className="skills-card">
                                <Card.Img variant="top" src={UI} />
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        &ndash;&ndash;<br/>
                                        UI/UX Design
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        {/* <Col xs={12} sm={12} md={3} lg={3}> */}
                            <Card className="skills-card">
                                <Card.Img variant="top" src={Other} />
                                <Card.Body>
                                    <Card.Text className="card-text">
                                        &ndash;&ndash;<br/>
                                        Other
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        {/* </Col> */}
                        </CardGroup>
                    </Row>
                </Container>
            </div>
        </a>
    );
}