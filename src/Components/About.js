import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './About.css';
import AboutPic from './about.png';

export default props => {
    return(
        <div className="about-pg">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <img src={AboutPic} className="about-polaroid" />
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h1>bio</h1>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h2>goals</h2>
                    </Col>
                </Row>

                {/* will probably need 2 rows worth of content l8r */}
                {/* <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <img src={AboutPic} className="about-polaroid" />
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h1>bio</h1>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <h2>goals</h2>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}