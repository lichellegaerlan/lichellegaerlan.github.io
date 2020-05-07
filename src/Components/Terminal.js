import React from 'react';

import './Terminal.css';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from './icon_thick.png';
import LinkedIn from './linkedin.svg';
import Github from './github.svg';
import Mail from './gmail.svg';

export default props => {
    return(
        // <div className="terminal-page">
        // <Container>
        //     <Row>
        //         <Col xs={12} sm={12} md={12} lg={12}>
        //         <div className="terminal">
        //             welcome@lichellegaerlan > Hello World <br/>
        //             welcome@lichellegaerlan > My name is Lichelle Gaerlan. <br/>
        //             welcome@lichellegaerlan > Click to tour my website. <br/>
        //         </div>
        //         </Col>
        //     </Row>
        // </Container>
        <div className="terminal">
            <Container className="hi">
            {/* <div className="hi"> */}
                <Row>
                    
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <h1>hi</h1>
                        </Col>
                    
                </Row>
                {/* </div> */}
            </Container>
        </div>
    );
}