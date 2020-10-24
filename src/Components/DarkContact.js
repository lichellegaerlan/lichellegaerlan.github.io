import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './DarkContact.css';

export default props => {
    return(
        <div className="contact-page-dark">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1 className="n1-dark" style={{ textTransform: "uppercase" }}>Lichelle Gaerlan</h1>
                        <h2 className="n2-dark">Las Vegas | Designer &amp; Developer</h2>
                        <br/><br/>

                        <p className="contact-text-dark">
                            If you would like to get in touch or work on a project together, <br/>
                            feel free to contact me at 
                            <a className="e1-dark" href="mailto:lichellemaegaerlan@gmail.com"> lichellemaegaerlan@gmail.com</a>
                        </p>
                        <br/><br/>

                        <p className="contact-text-dark">
                            <a className="e1-dark" href="https://github.com/lichellegaerlan" target="_blank">Github</a> / <a className="e1-dark" href="https://www.linkedin.com/in/lichellemaegaerlan" target="_blank">LinkedIn</a> / <a className="e1-dark" href="mailto:lichellemaegaerlan@gmail.com">Mail</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}