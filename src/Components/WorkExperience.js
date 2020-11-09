import React from 'react';

import './WorkExperience.css';
import DarkContact from './DarkContact.js';

import { Jumbotron } from 'react-bootstrap';

export default props => {
    return(
        <div>
            <div className="work-experience">
                <Jumbotron className="work-container" style={{ backgroundColor: "#fff" }}>
                    <h1 className="work-title">Education</h1>
                    <h2 className="work-sub">University of Nevada, Las Vegas</h2>
                    <p>
                        <font color="#986359">AUGUST 2015 — MAY 2020</font> <br/> <br/>
                        Bachelor's of Science, Computer Science <br/>
                        Minor: Mathematics <br/>
                        Concentration: Information Assurance <br/>
                        Honors: Cum Laude <br/>
                    </p>
                </Jumbotron>

                <Jumbotron className="work-container" style={{ backgroundColor: "#f4efee" }}>
                    <h1 className="work-title">Network Technician</h1>
                    <h2 className="work-sub">UNLV Network Development and Engineering</h2>
                    <p>
                        <font color="#986359">APRIL 2018 — PRESENT</font> <br/> <br/>
                        Provide support to customers to troubleshoot and resolve connectivity issues via phone call, e-mail, in-person requests, and helpdesk ticketing systems <br/>
                        Configuring, installing, and troubleshooting Cisco switches, voice gateways, uninterruptible power supplies (UPS), and wireless access points <br/>
                        Cabling and tracing of data and fiber infrastructure <br/>
                        Created IP address reservations and DNS records using Infoblox <br/>
                        Created topology diagrams of campus network <br/>
                        Maintained inventory of network devices and documentation of the status of all intermediate distribution frames (~200 IDF’s) on campus <br/>
                        Write technical documentation articles for automation scripts and workplace procedures <br/>
                        Basic automation scripting to assist network engineers with ongoing projects <br/>
                        Maintain codebase for current UNLV NDE websites written in AngularJS and Node.js <br/>

                    </p>
                </Jumbotron>

                <Jumbotron className="work-container" style={{ backgroundColor: "#fff" }}>
                    <h1 className="work-title">Teaching Assistant and Peer Mentor</h1>
                    <h2 className="work-sub">UNLV College of Engineering</h2>
                    <p>
                        <font color="#986359">AUGUST 2018 — MAY 2019</font> <br/> <br/>
                        Worked with first-year and second-year computer science students to provide guidance and tutoring in the student’s classes and first-year seminar engineering projects. <br/>
                        Projects included: Web application development with Google App Inventor, mobile application development with Android Studio, and drone programming in Python. 
                    </p>
                </Jumbotron>
            </div>

            {/* <DarkContact /> */}
        </div>
    );
}