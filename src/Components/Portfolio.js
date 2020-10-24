import React from 'react';

import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Dialog, Toolbar } from '@material-ui/core';

import DarkContact from './DarkContact.js';
import ParkInn from './parkinn.png';

export default function Portfolio() {
    const [open, setOpen] = React.useState(false);    

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="pic-container">
                            <img src={ParkInn} className="portfolio-pics" onClick={handleClickOpen} />
                            <Dialog fullScreen open={open} onClose={handleClose}>
                                <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                    <i className="mat-icons close-icon parkinn" onClick={handleClose}>close</i>
                                </Toolbar>
                            </Dialog>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} className="project-container">
                            <h1 className="project-title" style={{ color: "#73a9cf" }}>ParkInn</h1> <br/>
                            <h2 className="project-description">A parking reservation software to manage, monetize, and enforce parking reservations.</h2> <br />
                            <button className="project-button parkinn" onClick={handleClickOpen}>Learn More</button>
                            <Dialog fullScreen open={open} onClose={handleClose}>
                                <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                    <i className="mat-icons close-icon parkinn" onClick={handleClose}>close</i>
                                </Toolbar>
                            </Dialog>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* <div className="portfolio-preview">
                <Row className="preview-container">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1 className="project-title">
                            More projects coming soon
                        </h1>
                    </Col>
                 </Row>
            </div> */}

            <DarkContact />
        </div>
    );
}