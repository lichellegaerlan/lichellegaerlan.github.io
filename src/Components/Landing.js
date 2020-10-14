import React from 'react';

import './Landing.css';

import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <div className="landing">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1 id="about">Hi, My name is Lichelle</h1>
                        <h2 id="about-sub">I'm a designer, developer, and computer networks specialist</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}