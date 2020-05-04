import React from 'react';

import './Landing.css';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from './icon_thick.png';
import LinkedIn from './linkedin.svg';
import Github from './github.svg';
import Mail from './gmail.svg';

export default props => {
    return(
        <a name="experience">
            <div className="about-me">
                <Container>
                    {/* <div className="about-me"> */}
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            hi
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            there
                        </Col>
                    </Row>
                    </Container>
            </div>
        </a>
    );
}