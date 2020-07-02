import React from 'react';

import './WorkExperience.css';
import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <a name="portfolio">
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            {/* <h1>Portfolio</h1>
                            <h3>side projects and experiments</h3> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </a>
    );
}