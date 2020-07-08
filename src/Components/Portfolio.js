import React from 'react';

import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';

export default props => {
    return(
        <a name="portfolio">
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                                <h1 className="port-title">Portfolio</h1>
                                <p className="port-sub"><b><i>side projects and experiments</i></b></p>
                                {/* <h1 style={{ color: '#b3ada6', lineHeight: '20px' }}>&ndash;</h1> */}
                                <hr style={{ backgroundColor: '#C9CEE9', width: '60px', height: '0.5px' }}/>
                                <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </a>
    );
}