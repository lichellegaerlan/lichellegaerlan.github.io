import React from 'react';

import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Dialog, Toolbar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

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
                            <div className="fade-in-text">
                                <h1 className="project-title" style={{ color: "#73a9cf" }}>ParkInn</h1> <br/>
                                <h2 className="project-description">A parking reservation software to manage, monetize, and enforce parking reservations.</h2> <br />

                                <button className="project-button parkinn" onClick={handleClickOpen}>Learn More</button>
                                <Dialog fullScreen open={open} onClose={handleClose}>
                                    <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                        <i className="mat-icons close-icon parkinn" onClick={handleClose}>close</i>
                                    </Toolbar>

                                    <div className="parkinn-page">
                                        <Col xs={12} sm={12} md={12} lg={8}>
                                            {/* <ExpansionPanel defaultExpanded="true"> */}
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />} >
                                                    <h1 className="parkinn-header">About ParkInn</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        ParkInn is a parking reservation software that allows businesses to manage, monetize, and enforce parking online.
                                                        It consists of two applications: a web application for the businesses to manage their parking lots, and a mobile
                                                        application for guests to be able to reserve parking online. The software was intended to be used by businesses that
                                                        enforce paid parking, such as universities, casinos, event centers, festivals, and more. <br/><br/>

                                                        With ParkInn, businesses can: <br/>
                                                        1. Design their parking lot(s) <br/>
                                                        2. Sell parking reservations and permits <br/> 
                                                        3. See statistics about their lots, such as revenue earned over time and peak parking hours <br/>
                                                        4. Notify users about lot updates, such as closures or limited spaces <br/>
                                                        5. Handle parking incidents reported by guests <br/><br/>

                                                        Additionally, guests can: <br/>
                                                        1. Reserve and purchase parking spots and permits <br/>
                                                        2. See a live map of the lots and available spaces <br/>
                                                        3. Report incidents to the parking enforcers <br/><br/>

                                                        The application was developed in Spring 2020 by a group of students and I during our Software Product Design course.<br/><br/>

                                                        <a href="https://github.com/lichellegaerlan/parkinn" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>View Source Code</a>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            {/* <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />}>
                                                    <h1 className="parkinn-header">Features</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        With ParkInn, businesses can: <br/>
                                                        1. Design their parking lot(s) <br/>
                                                        2. Sell parking reservations and permits <br/> 
                                                        3. See statistics about their lots, such as revenue earned over time and peak parking hours <br/>
                                                        4. Notify users about lot updates, such as closures or limited spaces <br/>
                                                        5. Handle parking incidents reported by guests <br/><br/>

                                                        Additionally, guests can: <br/>
                                                        1. Reserve and purchase parking spots and permits <br/>
                                                        2. See a live map of the lots and available spaces <br/>
                                                        3. Report incidents to the parking enforcers <br/><br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel> */}

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />}>
                                                    <h1 className="parkinn-header">My Role</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        Conduct user interviews and competitive market analysis <br/>
                                                        Used the findings from my research to write technical reports and documentation regarding our product's goals,
                                                        which was later presented to our advisor before we began prototyping and development <br/>
                                                        Create wireframes and prototypes using Figma <br/>
                                                        Write frontend code using React JS and Material UI <br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />}>
                                                    <h1 className="parkinn-header">My Process</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        <i className="mat-icons parkinn-icons">person_pin</i><span className="tab" style={{ color: "#73a9cf" }}>Empathize and Identify</span> <br/>
                                                        My group and I started ParkInn because we were frustrated with finding parking at our university and across the city.
                                                        Later, I conducted user interviews to assess the goals and painpoints of my group members, students, and faculty members
                                                        at our university. <br/> <br/>

                                                        After conducting user research, I looked into other parking reservation systems on the market. I found that there were
                                                        no reservation systems that allowed the businesses themselves to have complete control over designing their lots, changing
                                                        prices, and notifying users about lot closures. This became a defining feature to our product. Our team felt that it was pertinent
                                                        to allow businesses to manage the parking lots themselves, as it would create a better, informative experience for both stakeholders and customers. <br/><br/>
                                                        
                                                        {/* <a href="" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>View Analysis Report</a> */}
                                                        
                                                        <i className="mat-icons parkinn-icons">search</i><span className="tab" style={{ color: "#73a9cf" }}>Analyze and Define</span> <br/>
                                                        By conducting user interviews, and even putting myself into the position of a potential user, I understood
                                                        that users just wanted a simple, clean, and straightforward way to be able to view and reserve spots in certain lots with
                                                        a similar system to placing movie theater recommendations. Conducting market analysis also allowed me to recognize that
                                                        there were no products on the market that allowed businesses to customize their parking lots. By allowing businesses to do so,
                                                        a better user experience could be created since users would be notified about price changes on spots or lot closures due to events.
                                                        As such, we came to the conclusion that this would be a defining, unique feature to our product. <br/><br/>

                                                        {/* <a href="" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>View User Persona</a> */}

                                                        <i className="mat-icons parkinn-icons">create</i><span className="tab" style={{ color: "#73a9cf" }}>Ideate and Design</span> <br/>
                                                        After conducting research and analyzing the current problem, I met with my team to discuss my findings and suggesting
                                                        core features necessary to create our product based off of my findings. With this in mind, I wireframed and prototyped the product using Figma. <br/><br/>
                                                        {/* <a href="" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>View Wireframe</a> */}
                                                        {/* <a href="" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>View Paper Prototype</a> */}
                                                        
                                                        <i className="mat-icons parkinn-icons">build</i><span className="tab" style={{ color: "#73a9cf" }}>Implement and Test</span> <br/>
                                                        I presented my prototype to my team and my professor for approval before moving forward with implementation. 
                                                        Since I was also responsible for developing the web application's frontend, I was able to iteratively test and present 
                                                        the design and user experience of our product with my team members, classmates, and professor throughout its development.

                                                        My team and I worked incredibly hard to develop a beautiful, efficient, and useful product. Upon final presentation, we 
                                                        had were able to host both the mobile and web applications. After presenting, we had received a lot of positive feedback. 
                                                        Due to costs, we could not keep our server live, but the source code can be found <a href="https://github.com/lichellegaerlan/parkinn" target="_blank" style={{ color: "#73a9cf", textDecoration: "none" }}>on my Github</a>.
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </Col>
                                        <br/><br/>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <button className="close-button parkinn-close-button" onClick={handleClose}>Close</button>
                                        </Col>
                                    </div>
                                </Dialog>
                            </div>
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