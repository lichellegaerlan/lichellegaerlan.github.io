import React from 'react';

import './About.css';
// import AboutPic from './about_lighter.png';
import AboutPic from './about.png';
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
            // <div>
                <div className="about-pg">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles" style={{ textAlign: "left" }}>
                                <h1 className="about-headers">About</h1>
                                <br/>
    
                                <div className="mobile-about-pic">
                                    {/* <img src={AboutPic} className="about-polaroid" alt="about" /> */}
                                    <center>
                                        <img src={AboutPic} className="about-pic" alt="about" /> <br/><br/>
                                    </center>
                                </div>

                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3}>
                                        <p className="about-text">
                                            <b><font color="#bb8c86">Name</font></b> <br/>
                                            <b><font color="#bb8c86">Location</font></b> <br/>
                                            <b><font color="#bb8c86">Education</font></b> <br/>
                                            <b><font color="#bb8c86">Occupation</font></b> <br/>
                                            <b><font color="#bb8c86">Interests</font></b> <br/>
                                        </p>
                                    </Col>
                                    <Col xs={9} sm={9} md={9} lg={9}>
                                        <p className="about-text">
                                            Lichelle Gaerlan <br/>
                                            Las Vegas, Nevada <br/>
                                            BS in Computer Science <br/>
                                            UI/UX Designer, Network Technician <br/>
                                            Digital art, running, reading, yoga, tarot <br/><br/>
                                        </p>
                                    </Col>
                                </Row>

                                <div className="about-text">
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
                                                    <p className="process-text">
                                                        I believe that it is extremely essential to understand user's and stakeholder's goals, values, and challenges.
                                                        At this stage is where I conduct user research and interviews to learn more about their story and to understand their needs. 
                                                        During this stage, I also find importance in conducting market analysis as a means of determining how I can deliver unique, innovative solutions.
                                                    </p>
                                                    <br/>
                                                </Col> 

                                                <Col xs={12} sm={12} md={12} lg={6}>
                                                    <i className="mat-icons process-icons">search</i><span className="tab"><h2 className="process-headers">Analyze and Define</h2></span> <br/>
                                                    <p className="process-text">
                                                        After being able to listen to and gain insight from conducting user research, it is essential for me 
                                                        to take a step back and analyze my findings. Here, I can look over everything I've learned and conflate
                                                        the information to ultimately define the user's point of view, goals, and problems. With this information, 
                                                        I will construct user personas at this stage to visually represent the target demographic. Through analysis, I am more
                                                        equipped to define the requirements for the product to present to the client.
                                                    </p>
                                                    <br/>
                                                </Col> 

                                                <Col xs={12} sm={12} md={12} lg={6}>
                                                    <i className="mat-icons process-icons">create</i><span className="tab"><h2 className="process-headers">Ideate and Design</h2></span> <br/>
                                                        <p className="process-text">
                                                            During this step, I will utilize my research and analysis to begin brainstorming and creating the information architecture of the product. 
                                                            Afterwards, I will create wireframes and sketches of the user flow, and present that to stakeholders to ensure that their requirements
                                                            are being met. Afterwards, I will use Figma to create interactive mockups and prototypes. Recently, I've been messing around and transitioning 
                                                            to using Adobe XD.
                                                        </p>
                                                    <br/>
                                                </Col> 

                                                <Col xs={12} sm={12} md={12} lg={6}>
                                                    <i className="mat-icons process-icons">build</i><span className="tab"><h2 className="process-headers">Implement and Test</h2></span> <br/>
                                                    <p className="process-text">
                                                        After creating a detailed, interactive prototype, I will conduct usability and A/B testing. I love being able to receive feedback
                                                        from both user's and stakeholder's, as it gives me the opportunity to ensure that their needs are being accurately represented. 
                                                        Doing so allows me to iteratively improve the intuitiveness and efficiency of the product's design before final delivery. <br/><br/>
                                                        
                                                        In some of my personal projects, I have implemented the frontend of my designs, usually using HTML/CSS and React JS.
                                                        However, my background in web development allowed me to understand how to effectively articulate the design
                                                        specifications programmatically. 
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

                                    <button className="portfolio-button"><Link to="/portfolio" className="process-link">My Portfolio</Link></button>
                                </div>
                                <br/><br/>
                            </Col>
    
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles" style={{ paddingRight: "20px"}}>
                                <h1 className="about-headers">Bio</h1>
                                <p className="about-text bio">
                                    My tech journey began when I was ten years old, developing simple HTML/CSS websites on MySpace and Tumblr for fun. 
                                    I gained an appreciation for digital aesthetics well-designed web applications at a very early age. <br/><br/>
    
                                    I decided to pursue a degree in Computer Science because I loved spending hours creating beautiful, efficient technology experiences.
                                    Along the way, I landed a job at my university's Network Engineering department, and gained a lot of experience in Computer Networking / IT.
                                    In my last half of undergrad, I returned to my roots and reignited my passion for web development. I took courses related to Human Computer Interaction and Software Product Design,
                                    which gave me experience in creating low and high fidelity prototypes, conducting user / market research, and developing responsive frontend web applications in React, Angular, and HTML/CSS.
                                    Taking these courses allowed me to learn how to create accessible, efficient, and realisitic designs that can translate well into the software development process.
                                    During this time, I began freelancing as a UI/UX designer for independent web and mobile app developers. <br/><br/>
                                </p>

                                <h1 className="about-headers">Personality</h1>
                                    <p className="about-text">
                                        <a href="https://www.16personalities.com/intj-personality" className="about-links" target="_blank" rel="noopener noreferrer"><b>The Architect (INTJ)</b></a> — Myer Briggs Type <br/>
                                        "Imaginative and strategic thinkers, with a plan for everything.
                                        These thoughtful tacticians love perfecting the details of life, 
                                        applying creativity and rationality to everything they do."
                                    </p>
                                <br/>
                            </Col>
    
                            <Col xs={12} sm={12} md={12} lg={4} className="col-styles">
                                <h2 className="about-headers">Goals</h2>
                                    <p className="about-text">
                                        I'm focused on creating meaningful, efficient experiences through design. I've found that my work experience has allowed me to create a multi-faceted skill set in tech that blends UI/UX design, web development, and IT
                                        Despite most of my professional background being in networking, I find the knowledge and skills I gained to be valuable in my UI/UX design process.
                                        In both disciplines, I've enjoyed regularly communicating with clients, listening to their challenges, diagnosing the main problems, and quickly
                                        designing a solution for them that's creative, efficient, and meaningful. <br/><br/>

                                        I am focused on utilizing my variety of skills to create meaningful and efficieny experiences.
                                        More importantly, I'm a lifelong learner. I enjoy learning about and listening to client's and user's stories 
                                        in order to create strategies, products, and services that help mend their painpoints and accomplish any goals we've discussed.
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
                        <br/>
                    </Container>

                    <DarkContact/>
                </div>
            // </div>
        );
    // }
}
