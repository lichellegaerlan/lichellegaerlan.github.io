import React from 'react';

import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Dialog, Toolbar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ReactPlayer from 'react-player';

import { ExpandMore } from '@material-ui/icons';

import DarkContact from './DarkContact.js';
import ParkInn from './parkinn.png';
import ParkInnWireframe from './parkinn-wireframe.jpg';
import ParkInnMock1 from './parkinn-mockup1.png';
import ParkInnMock2 from './parkinn-mockup2.png';
import ParkInnMock3 from './parkinn-mockup3.png';
import Readit from './Readit.png';
import ReaditRequirements from './readit-requirements.jpg';
import ReaditWireframe from './readit-wireframe.jpg';
import ReaditFlow from './readit-userflow.jpg';
import Soulmates from './Soulmates.png';

export default function Portfolio() {
    const [openParkinn, setOpenParkinn] = React.useState(false);    

    const handleOpenParkinn = () => {
        setOpenParkinn(true);
    };
    
    const handleCloseParkinn = () => {
        setOpenParkinn(false);
    };

    const [openReadit, setOpenReadit] = React.useState(false);    

    const handleOpenReadit = () => {
        setOpenReadit(true);
    };
    
    const handleCloseReadit = () => {
        setOpenReadit(false);
    };

    const [openSoulmates, setOpenSoulmates] = React.useState(false);    

    const handleOpenSoulmates = () => {
        setOpenSoulmates(true);
    };
    
    const handleCloseSoulmates = () => {
        setOpenSoulmates(false);
    };

    return(
        <div>
            <div className="portfolio">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="pic-container">
                            <img src={ParkInn} className="portfolio-pics" alt="parkinn-portfolio" onClick={handleOpenParkinn} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} className="project-container">
                            <div className="fade-in-text">
                                <h1 className="project-title" style={{ color: "#73a9cf" }}>ParkInn</h1> <br/>
                                <h2 className="project-description">A parking reservation software to manage, monetize, and enforce parking reservations.</h2> <br />

                                <button className="project-button parkinn" onClick={handleOpenParkinn}>Learn More</button>
                                <Dialog fullScreen open={openParkinn} onClose={handleCloseParkinn}>
                                    <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                        <i className="mat-icons close-icon" onClick={handleCloseParkinn}>close</i>
                                    </Toolbar>

                                    <div className="parkinn-page">
                                        <Col xs={12} sm={12} md={12} lg={8}>
                                            <ExpansionPanel defaultExpanded="true">
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />} >
                                                    <h1 className="parkinn-header">About</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        <div className='player-wrapper'>
                                                            <ReactPlayer url='https://youtu.be/7JYyzctXCfE' className="react-player" width="90%" height="90%" /> <br/><br/>
                                                        </div>

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

                                                        <a href="https://github.com/lichellegaerlan/parkinn" target="_blank" rel="noopener noreferrer" style={{ color: "#73a9cf", textDecoration: "none" }} className="bold-link">View Source Code</a>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />}>
                                                    <h1 className="parkinn-header">My Role</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        - Conduct user interviews and competitive market analysis <br/>
                                                        - Used the findings from my research to write technical reports and documentation regarding our product's goals,
                                                        which was later presented to our advisor before we began prototyping and development <br/>
                                                        - Create wireframes and prototypes using Figma <br/>
                                                        - Write frontend code using React JS and Material UI <br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#73a9cf" }} />}>
                                                    <h1 className="parkinn-header">My Process</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        <b><font color="#73a9cf">Empathize and Identify</font></b> <br/>
                                                        My group and I started ParkInn because we were frustrated with finding parking at our university and across the city.
                                                        Later, I conducted user interviews to assess the goals and painpoints of my group members, students, and faculty members
                                                        at our university. <br/> <br/>

                                                        After conducting user research, I looked into other parking reservation systems on the market. I found that there were
                                                        no reservation systems that allowed the businesses themselves to have complete control over designing their lots, changing
                                                        prices, and notifying users about lot closures. This became a defining feature to our product. Our team felt that it was pertinent
                                                        to allow businesses to manage the parking lots themselves, as it would create a better, informative experience for both stakeholders and customers. <br/><br/>
                                                        
                                                        <b><font color="#73a9cf">Analyze and Define</font></b> <br/>                                                        
                                                        By conducting user interviews, and even putting myself into the position of a potential user, I understood
                                                        that users just wanted a simple, clean, and straightforward way to be able to view and reserve spots in certain lots with
                                                        a similar system to placing movie theater recommendations. Conducting market analysis also allowed me to recognize that
                                                        there were no products on the market that allowed businesses to customize their parking lots. By allowing businesses to do so,
                                                        a better user experience could be created since users would be notified about price changes on spots or lot closures due to events.
                                                        As such, we came to the conclusion that this would be a defining, unique feature to our product. <br/><br/>

                                                        If you're interested in reading about the research and analysis findings, you can <a href="https://docs.google.com/document/d/10aM2IDMAd5OIEPZpaNqih1xhRRRcX-yKB98u7BjKQLk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#73a9cf", textDecoration: "none" }} className="bold-link">view the research and analysis document on Google Drive.</a> <br/><br/>

                                                        <b><font color="#73a9cf">Ideate and Design</font></b> <br/>                                                        
                                                        After conducting research and analyzing the current problem, I met with my team to discuss my findings and suggesting
                                                        core features necessary to create our product based off of my findings. With this in mind, I wireframed and prototyped the product using Figma. <br/><br/>

                                                        Below shows an image of the application's basic wireframe, which laid out the information architecture and basic features we wanted to implement. <br/><br/>
                                                        <img src={ParkInnWireframe} className="readit-wireframe" alt="parkinn-wireframe" /> <br/><br/>

                                                        Since our team only had 10 weeks for research, design, and development, I unfortunately did not have time to create an interactive prototype.
                                                        However, I did create some mockups to layout the potential UI for the project. The mockups I created are shown below. <br/><br/>
                                                        <img src={ParkInnMock1} className="parkinn-mockup1" alt="parkinn-mockup-dash" /> <br/><br/>
                                                        <img src={ParkInnMock2} className="parkinn-mockup2" alt="parkinn-mockup-stats" /> <br/><br/>
                                                        <img src={ParkInnMock3} className="parkinn-mockup2" alt="parkinn-mockup-lots" /> <br/><br/>

                                                        <b><font color="#73a9cf">Implement and Test</font></b> <br/>                                                        
                                                        I presented my prototype to my team and my professor for approval before moving forward with implementation. 
                                                        Since I was also responsible for developing the web application's frontend, I was able to iteratively test and present 
                                                        the design and user experience of our product with my team members, classmates, and professor throughout its development.

                                                        My team and I worked incredibly hard to develop a beautiful, efficient, and useful product. Upon final presentation, we 
                                                        had were able to host both the mobile and web applications. After presenting, we had received a lot of positive feedback. 
                                                        Due to costs, we could not keep our server live, but the source code can be found <a href="https://github.com/lichellegaerlan/parkinn" target="_blank" rel="noopener noreferrer" style={{ color: "#73a9cf", textDecoration: "none" }} className="bold-link">on my Github</a>.
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </Col>
                                        <br/><br/>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <button className="close-button parkinn-close-button" onClick={handleCloseParkinn}>Close</button> <br/>
                                        </Col>
                                    </div>
                                </Dialog>
                            </div>
                        </Col>
                    </Row>

                    <br/><br/>

                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="pic-container">
                            <img src={Readit} className="portfolio-pics" alt="readit-portfolio" onClick={handleOpenReadit} />
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6} className="project-container">
                            <div className="fade-in-text">
                                <h1 className="project-title" style={{ color: "#a2a9d4" }}>Readit</h1> <br/>
                                <h2 className="project-description">A mobile application that allows you to share your favorite books with your friends.</h2> <br />

                                <button className="project-button readit" onClick={handleOpenReadit}>Learn More</button>
                                <Dialog fullScreen open={openReadit} onClose={handleCloseReadit}>
                                    <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                        <i className="mat-icons close-icon" onClick={handleCloseReadit}>close</i>
                                    </Toolbar>


                                    <div className="readit-page">
                                        <Col xs={12} sm={12} md={12} lg={8}>
                                            <ExpansionPanel defaultExpanded="true">
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#a2a9d4" }} />} >
                                                    <h1 className="readit-header">About</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        <div className='player-wrapper'>
                                                            <ReactPlayer url='https://youtu.be/f81SUZmKdtg' className="react-player" width="90%" height="90%" /> <br/><br/>
                                                        </div>

                                                        Readit is a mobile application that allows book lovers to be able to share their favorite
                                                        books with their friends. The app is designed to create a social media experience for users.
                                                        With Readit, users can create and add books to their personalized <i>bookshelves</i>, which have a similar 
                                                        functionality to playlists on music streaming services such as Spotify. Furthermore, 
                                                        users can set their status to the book that they're currently reading, search for new books, find friends and visit
                                                        their profiles, and view statistics regarding their reading progress. <br/><br/>

                                                        For this product, I conducted user research and designed the user interface for my client, <a href="https://github.com/daee-kang" target="_blank" rel="noopener noreferrer" style={{ color: "#a2a9d4", textDecoration: "none" }} className="bold-link">Daee Kang</a> (Konami Software Engineer). 
                                                        <br/><br/>

                                                        <a href="https://www.figma.com/proto/bosU1zlXfJJDjLmf4P5Hnm/Readit?node-id=76%3A47&scaling=scale-down" target="_blank" rel="noopener noreferrer" style={{ color: "#a2a9d4", textDecoration: "none" }} className="bold-link">View Interactive Prototype on Figma</a>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#a2a9d4" }} />} >
                                                    <h1 className="readit-header">My Role</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        - Conduct user interviews and competitive market analysis <br/>
                                                        - Used the findings from my research to create user personas and 
                                                        write technical reports and documentation regarding our product's goals <br/>
                                                        - Create wireframes <br/>
                                                        - Create interactive prototypes using Figma <br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>

                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#a2a9d4" }} />} >
                                                    <h1 className="readit-header">My Process</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        <b><font color="#a2a9d4">Empathize and Identify</font></b> <br/>
                                                        My client, <a href="https://github.com/daee-kang" target="_blank" rel="noopener noreferrer" style={{ color: "#a2a9d4", textDecoration: "none" }} className="bold-link">Daee Kang</a> (Konami Software Engineer)
                                                        came to me to design Readit, as he planned to develop the application. 
                                                        His vision was to develop a mobile application that could blend elements from GoodReads, Spotify, and Instagram, such that
                                                        users would be able to read, share, and find books in a social media setting. I had a conversation with Daee to gain a better
                                                        understanding of his visions, goals, and motivations for this project. After talking to Daee, I found that the goal he had
                                                        for Readit was driven by how often his friends would exchange book recommendations, without being able to conglomerate all recommendations
                                                        efficiently, and in one place. <br/><br/>

                                                        By meeting with my client, I was able to gauge and lay out the requirements he needed for the project, as shown below. <br/><br/>
                                                        <img src={ReaditRequirements} className="readit-requirements" alt="readit-requirements" /> <br/><br/>

                                                        I later conducted market research to see how current applications on the market, such as GoodReads and Spotify, may be 
                                                        unfulfilling to users. I also conducted user interviews to understand how often users share books with their friends,
                                                        what motivates users to read, and what painpoints users are experience with current products on the market. <br/><br/>
                                                        
                                                        <b><font color="#a2a9d4">Analyze and Define</font></b> <br/>                                                        
                                                        With the research gained from conducting market analysis and user interviews, I could identify and empathize with the 
                                                        target demographic's goals and painpoints. Through research, I found that although users default to using GoodReads due to 
                                                        the application's established popularity, users were unsatisifed with how complicated it was to find friends, find books,
                                                        and add books to the shelf. Users wanted a sleek, straightforward, and efficient experience when completing these tasks. Users
                                                        revealed that they typically have seamless experience when navigating their favorite social media or music streaming applications.
                                                        With this information in mind, I was able to analyze the problem with exisitng applications, and define a new method
                                                        of approaching the solution to these problems. <br/><br/>

                                                        <b><font color="#a2a9d4">Ideate and Design</font></b> <br/>                                                        
                                                        After analyzing the user's goals, motivations, and painpoints, I began a high-level brainstorm for how the product should operate. 
                                                        First, I defined key features that were needed based off my findings. Then, I created the product's information architecture and sketched out the 
                                                        general design and user flow for the product. I presented the information architecture, user flow, and wireframe to Daee to ensure that
                                                        the goal and vision he had for Readit was being met, as shown below. <br/><br/>

                                                        <img src={ReaditFlow} className="readit-flow" alt="readit-flow" /> <br/><br/>
                                                        <img src={ReaditWireframe} className="readit-wireframe" alt="readit-wireframe" /> <br/><br/>

                                                        After laying out Readit's features, I created an <a href="https://www.figma.com/proto/bosU1zlXfJJDjLmf4P5Hnm/Readit?node-id=76%3A47&scaling=scale-down" target="_blank" rel="noopener noreferrer" style={{ color: "#a2a9d4", textDecoration: "none" }} className="bold-link">interactive prototype on Figma</a>. <br/><br/>
                                                        
                                                        <b><font color="#a2a9d4">Implement and Test</font></b> <br/>                                                        
                                                        I presented my prototype to Daee for feedback and approval. He was happy with how the product's prototype came out,
                                                        and found the user interface to be clean, efficient, and intuitive. The product was also presented to various users,
                                                        both avid and sporadic readers, who also found the product to be pleasant and straightforward to use. <br/><br/>

                                                        Afterwards, Daee and I continued to discuss potential features that could be implemented within the app. 
                                                        We later want to design and implement a feature where users can find books by scanning the ISBNs.
                                                        We also discussed the potential for monetizing the app. Considering that Readit allows users to search for books and read their descriptions,
                                                        a potential monetization strategy that we brainstormed was to include affiliate links in the book descriptions
                                                        for users to purchase the books on Amazon. <br/><br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </Col>
                                        <br/><br/>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <button className="close-button readit-close-button" onClick={handleCloseReadit}>Close</button> <br/>
                                        </Col>
                                    </div>
                                </Dialog>
                            </div>
                        </Col>
                    </Row>

                    <br/><br/>

                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="pic-container">
                            <img src={Soulmates} className="portfolio-pics" alt="soulmates-portfolio" onClick={handleOpenSoulmates} />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="project-container">
                            <div className="fade-in-text">
                                <h1 className="project-title" style={{ color: "#D46F6F" }}>Soulmates</h1> <br/>
                                <h2 className="project-description">An astrology dating app that uses your natal chart to find your best match.</h2> <br />

                                <button className="project-button soulmates" onClick={handleOpenSoulmates}>Learn More</button>

                                <Dialog fullScreen open={openSoulmates} onClose={handleCloseSoulmates}>
                                    <Toolbar style={{ flexDirection:'row-reverse', marginBottom: '0px' }}>
                                        <i className="mat-icons close-icon" onClick={handleCloseSoulmates}>close</i>
                                    </Toolbar>


                                    <div className="soulmates-page">
                                        <Col xs={12} sm={12} md={12} lg={8}>
                                            <ExpansionPanel defaultExpanded="true">
                                                <ExpansionPanelSummary expandIcon={<ExpandMore style={{ color: "#D46F6F" }} />} >
                                                    <h1 className="soulmates-header">About</h1>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <p className="parkinn-text">
                                                        Soulmates is a mobile dating application that allows you to find your perfect match based off your astrological natal chart.
                                                        Although it's intended to be a dating app, users can optionally set the app to find career or friendship matches as well. <br/><br/>

                                                        When users sign up, they will input their birth information, such as the location, date, and time. The application will then
                                                        generate a birth chart for the user. When users are looking for matches, they will see other user's birth charts, along with 
                                                        a compatibility rating (as a percentage) between the two users, whether it's a romantic or platonic connection. Users will be able to
                                                        see the explanation of which astrological aspects contribute to making two users a good match.<br/><br/>
                                                        
                                                        Although the app shows compatibility ratings between users, it will <i>not</i> prevent users from being able to see or match with users whose compatibility ratings are considered "low."
                                                        Despite my interest in astrology, I am a believer in creating your own fate and having the discernment to make your own choices in life, both with and without an
                                                        astrological explanation. As such, the app aims to create a personalized, social experience regardless of the user's birth charts. This is achieved by letting users customize their profiles by uploading 
                                                        their own photos, creating their own bios, selectively filling out fields about their interests, and connecting to social media platforms like Twitter, Spotify, and Instagram. <br/><br/>

                                                        The design and development process for the application began in November 2020, so more information is to come.
                                                        Although Soulmates is still a work in progress, feel free to 
                                                        <a href="https://www.figma.com/proto/8psR2WxCqynonuuFLHEbM6/Soulmates?node-id=1%3A2&scaling=scale-down" target="_blank" rel="noopener noreferrer" style={{ color: "#D46F6F", textDecoration: "none" }} className="bold-link"> view my interactive prototyping journey on Figma</a>. <br/>
                                                    </p>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </Col>
                                        <br/><br/>
                                        <Col xs={12} sm={12} md={12} lg={6}>
                                            <button className="close-button soulmates-close-button" onClick={handleCloseSoulmates}>Close</button> <br/>
                                        </Col>
                                    </div>
                                </Dialog>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <DarkContact />
        </div>
    );
}