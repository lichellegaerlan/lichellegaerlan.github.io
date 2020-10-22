import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './LightContact.css';

export default props => {
    return(
        <div className="contact-page-light">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1 className="n1-light" style={{ textTransform: "uppercase" }}>Lichelle Gaerlan</h1>
                        <h2 className="n2-light">Las Vegas | Designer &amp; Developer</h2>
                        <br/><br/>

                        <p>
                            If you would like to get in touch or work on a project together, <br/>
                            feel free to contact me at 
                            <a className="e1-light" href="mailto:lichellemaegaerlan@gmail.com"> lichellemaegaerlan@gmail.com</a>
                        </p>
                        <br/><br/>

                        <p>
                            <a className="e1-light" href="https://github.com/lichellegaerlan">Github</a> / <a className="e1-light" href="https://www.linkedin.com/in/lichellemaegaerlan">LinkedIn</a> / <a className="e1-light" href="mailto:lichellemaegaerlan@gmail.com">Mail</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}