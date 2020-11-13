import React from 'react';

import './About.css';
import AboutPic from './about_lighter.png';
import DarkContact from './DarkContact';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Dialog, Toolbar } from '@material-ui/core';

export default function About() {
    const [open, setOpen] = React.useState(false);    

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    // render() {
        return(
            <div>
                <div className="about-pg">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles" style={{ textAlign: "left" }}>
                                <h1 className="about-headers">About</h1>
                                <br/>
    
                                <img src={AboutPic} className="about-polaroid" alt="about" />
                                <br/><br/><br/>
                            </Col>
    
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles" style={{ paddingRight: "20px"}}>
                                <h1 className="about-headers">Bio</h1>
                                <p className="about-text">
                                    My passion for technology and design began when I was a kid
                                    creating HTML/CSS layouts on MySpace and Tumblr for fun. <br/><br/>
    
                                    I later decided to pursue a degree in Computer Science because I truly enjoyed spending my free-time creating beautiful, functional aesthetics and experiences during
                                    my early web development days. 
                                    
                                    {/* During my last semester, I took a Software Product Design course, where I 
                                    gained experience in conducting user research, writing competitive analysis reports, creating prototypes, and improving my responsive frontend development skills. This course
                                    truly made me fall in love with combining design and code.  */}
                                    
                                    <br/><br/>
    
                                    I love the process of creating meaningful experiences for users. I enjoy empathizing with
                                    users in order to pinpoint their problems and design creative solutions. I am passionate about how design and
                                    technology can bring about change in a vast majority of fields, like business, marketing, and education. <br/><br/>
    
                                    <button className="process-button" onClick={handleClickOpen}>My Process</button>
                                    <Dialog fullScreen open={open} onClose={handleClose}>
                                        <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                            <i className="mat-icons close-icon" onClick={handleClose}>close</i>
                                            {/* <img src={Exit} onClick={handleClose} /> */}
                                        </Toolbar>
                                        
                                        <div className="process-page">
                                            <Col xs={12} sm={12} md={12} lg={12}>
                                                <h1 className="about-headers" style={{ textTransform: "uppercase" }}>My Workflow</h1> <br/>
                                            </Col>

                                            <Col xs={12} sm={12} md={12} lg={6}>
                                                <i className="mat-icons process-icons">person_pin</i><span className="tab"><h2 className="process-headers">Empathize and Identify</h2></span> <br/>
                                                <p className="about-text">
                                                    I believe that it is extremely essential to understand user's and stakeholder's goals, values, and challenges.
                                                    To understand their needs, I conduct user interviews to learn about their stories, experiences, needs, and painpoints. Additionally, I 
                                                    believe that it is also important to conduct market analysis in order to evaluate how I can accurately and uniquely fulfill the user's needs.
                                                </p>
                                                <br/>
                                            </Col> 

                                            <Col xs={12} sm={12} md={12} lg={6}>
                                                <i className="mat-icons process-icons">search</i><span className="tab"><h2 className="process-headers">Analyze and Define</h2></span> <br/>
                                                <p className="about-text">
                                                    By being able to learn about the user's story, I then analyze the research I've gathered in order to define the 
                                                    user's point of view, as well as the main challenges that user's face. At this stage, I construct user personas to 
                                                    outline the target demographic.  
                                                </p>
                                                <br/>
                                            </Col> 

                                            <Col xs={12} sm={12} md={12} lg={6}>
                                                <i className="mat-icons process-icons">create</i><span className="tab"><h2 className="process-headers">Ideate and Design</h2></span> <br/>
                                                <p className="about-text">
                                                I begin brainstorming and creating the information architecture. Afterwards, I can create quick sketches of the user flow
                                                and wireframing the key features for the product. As the process continues, I later use Figma and InVision Studio (beginner)
                                                to create various prototypes.
                                                </p>
                                                <br/>
                                            </Col> 

                                            <Col xs={12} sm={12} md={12} lg={6}>
                                                <i className="mat-icons process-icons">build</i><span className="tab"><h2 className="process-headers">Implement and Test</h2></span> <br/>
                                                <p className="about-text">
                                                After creating a detailed, interactive prototype, I will conduct usability testing and receive feedback
                                                from both user's and stakeholder's in order to iteratively improve the product's design.
                                                </p>
                                                <br/>
                                            </Col> 

                                            <Col xs={12} sm={12} md={12} lg={6}>
                                                <button className="process-close-button" onClick={handleClose}>Close</button>
                                            </Col>
                                            <br/>
                                        </div>
                                    </Dialog>


                                    {/* <span className="tab"><td onClick={()=> window.open("/portfolio", "_blank")}><button className="process-button">My Portfolio</button></td></span> */}

                                    <button className="portfolio-button"><Link to="/portfolio" className="process-link" target="_blank">My Portfolio</Link></button>
                                    <br/><br/>
                                </p>
                            </Col>
    
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles">
                                <h1 className="about-headers">Personality</h1>
                                <p className="about-text">
                                    <a href="https://www.16personalities.com/intj-personality" className="about-links" target="_blank" rel="noopener noreferrer"><b>The Architect (INTJ)</b></a> — Myer Briggs Type <br/>
                                    "Imaginative and strategic thinkers, with a plan for everything.
                                    These thoughtful tacticians love perfecting the details of life, 
                                    applying creativity and rationality to everything they do."
                                </p>
                                <br/>
    
                                <h2 className="about-headers">Goals</h2>
                                <p className="about-text">
                                <font color="#B48079">‣</font> To use my talent and creativity to create unique solutions <br/>
                                <font color="#B48079">‣</font> To use my experience in IT to understand how to empathize with, identify painpoints, and deliver solutions to clients <br/>
                                <font color="#B48079">‣</font> To use my passion for designing, coding, and connecting with clients in useful ways <br/>
                                <font color="#B48079">‣</font> To use my skills to contribute to a team, and to continually build my skills in turn
                                </p>
                                <br/>
    
                                <h2 className="about-headers">Tech Usage</h2>
                                <p className="about-text">
                                    <i className="mat-icons">devices</i><span className="tab">Devices: Macbook Pro, iPad Pro, iPhone</span> <br/>
                                    <i className="mat-icons">developer_mode</i><span className="tab">Operating Systems: Linux, Mac OS, Windows</span> <br/>
                                    <i className="mat-icons">cloud</i><span className="tab">Other: IT, Computer Networks</span> <br/>
                                </p>
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="sticky-contact">
                    <DarkContact/>
                </div>
            </div>
        );
    // }
}
