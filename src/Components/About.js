import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Contact from './ContactDark.js';

import './About.css';
// import AboutPic from './about.png';
import AboutPic from './about_lighter.png';
import Devices from './devices.svg';
import OS from './os.svg';
import Other from './other.svg';

export default props => {
    return(
        <div>
            <div className="about-pg">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} className="col-styles">
                            <h1 className="about-headers">About</h1>
                            <br/>

                            <img src={AboutPic} className="about-polaroid" />
                            <br/><br/>

                            {/* <p className="about-links-container">
                                <a href="https://www.github.com/lichellegaerlan" className="about-links" target="_blank">Github</a> / <a href="https://www.linkedin.com/lichellemaegaerlan" className="about-links" target="_blank">LinkedIn</a> / <a className="about-links" href="mailto:lichellemaegaerlan@gmail.com">Mail</a>
                            </p> */}
                            {/* <button className="portfolio-button">My Portfolio</button> */}
                            <br/>
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={4} className="col-styles" style={{ paddingRight: "20px"}}>
                            <h1 className="about-headers">Bio</h1>
                            <p className="about-text">
                                My passion for technology and design began when I was a kid
                                creating HTML/CSS layouts on MySpace and Tumblr for fun. <br/><br/>

                                I later decided to pursue a degree in Computer Science from the University of Nevada, Las Vegas
                                because I truly enjoyed spending my free-time creating beautiful, functional aesthetics and experiences during
                                my early web development days. In my last semester of university, I took a Software Product Design course, where I 
                                gained experience in conducting user research, creating prototypes, and improving my responsive frontend development skills. This course
                                truly made me fall in love with combining design and code. <br/><br/>

                                I love the process of creating meaningful experiences for users. I enjoy empathizing with
                                users in order to pinpoint their problems and design creative solutions. I am passionate about how design and
                                technology can bring about change in a vast majority of fields, like business, marketing, and education. <br/><br/>

                                <button className="process-button">My Process</button>
                                <button className="process-button"><Link to="/portfolio" className="process-link" target="_blank">My Portfolio</Link></button>
                            </p>
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={4} className="col-styles">
                            <h1 className="about-headers">Personality</h1>
                            <p className="about-text">
                                <a href="https://www.16personalities.com/intj-personality" className="about-links" target="_blank"><b>The Architect (INTJ)</b></a> — Myer Briggs Type <br/>
                                "Imaginative and strategic thinkers, with a plan for everything.
                                These thoughtful tacticians love perfecting the details of life, 
                                applying creativity and rationality to everything they do."
                            </p>
                            <br/>

                            <h2 className="about-headers">Goals</h2>
                            <p className="about-text">
                            <font color="#B48079">‣</font> To use my talent and creativity to create unique solutions <br/>
                            <font color="#B48079">‣</font> To use my passion for designing, coding, and connecting with clients in useful ways <br/>
                            <font color="#B48079">‣</font> To use my skills to contribute to a team, and to continually build my skills in turn
                            </p>
                            <br/>

                            <h2 className="about-headers">Tech Usage</h2>
                            <p className="about-text">
                            <img src={Devices} height="11px" width="11px" /><span className="tab">Devices: Macbook Pro, iPad Pro, iPhone</span> <br/>
                            <img src={OS} height="11px" width="11px" /><span className="tab">Operating Systems: Linux, Mac OS X, Windows</span> <br/>
                            <img src={Other} height="11px" width="11px" /><span className="tab">Other: IT, Computer Networks</span> <br/>
                            </p>
                        </Col>
                    </Row>

                </Container>
            </div>

            <Contact />
        </div>
    );
}