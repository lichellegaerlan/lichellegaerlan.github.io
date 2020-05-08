import React from 'react';

import './WorkExperience.css';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default props => {
    return(
        <a name="experience">
            <div className="work-experience">
                <div className="heading">
                    <h1 style={{ color: '#b3ada6', lineHeight: '25px' }}>&ndash;</h1>
                    <h1 className="work-heading">Work Experience</h1>
                    <h1 className="work-heading sub">+ Education</h1>
                </div>
                <Timeline lineColor={'#bab5ae'}>
                    <TimelineItem
                        dateText="08/2015 to 05/2020"
                        style={{ color: '#b5dbd4' }}
                        dateInnerStyle={{ background: '#a2c5be', color: '#fff', fontFamily: 'Helvetica', fontWeight: '200', letterSpacing: '1px' }}
                    >
                        <h1 className="work-title">Bachelor's of Science in Computer Science</h1>
                        <h1 className="work-subtitle">University of Nevada, Las Vegas</h1> <br/>
                        <p className="work-desc">
                            <b>
                            Concentration: Information Assurance<br/>
                            Minor: Mathematics<br/>
                            Honors: Cum Laude<br/><br/>
                            </b>
                        </p>
                        <p className="work-desc" style={{ fontSize: '85%' }}>
                            <b>
                            Relevant Courses: Computer Networks, Computer Security, Information Assurance, Internet Security,
                            Data Structures, Algorithm Analysis, Operating Systems, Software Product Design &amp; Development,
                            Technical Writing 
                            </b>
                        </p>
                        <hr style={{ backgroundColor: '#b3ada6' }}/>
                    </TimelineItem>

                    <TimelineItem
                        dateText="04/2018 to Present"
                        style={{ color: '#b5dbd4' }}
                        dateInnerStyle={{ background: '#a2c5be', color: '#fff', fontFamily: 'Helvetica', fontWeight: '200', letterSpacing: '1px' }}
                    >
                        <h1 className="work-title">Network Technician</h1>
                        <h1 className="work-subtitle">UNLV Network Development and Engineering</h1> <br/>
                        <p className="work-desc" style={{fontSize: '85%'}}>
                            <b>
                            {/* <center>Main Duties:<br/></center> */}
                            ∙ Configuring, installing, and troubleshooting Cisco switches, voice gateways, uninterruptible power supplies (UPS), and wireless access points<br/>
                            ∙ Cabling and tracing of data and fiber infrastructure<br/>
                            ∙ Worked with customers to troubleshoot and resolve connectivity issues<br/>
                            ∙ Created IP address reservations and DNS records using Infoblox<br/>
                            ∙ Basic automation scripting to assist network engineers with projects<br/>
                            </b>
                        </p>
                        <hr style={{ backgroundColor: '#b3ada6' }}/>
                    </TimelineItem>

                    <TimelineItem
                        dateText="08/2018 to 08/2019"
                        style={{ color: '#b5dbd4' }}
                        dateInnerStyle={{ background: '#a2c5be', color: '#fff', fontFamily: 'Helvetica', fontWeight: '200', letterSpacing: '1px' }}
                    >
                        <h1 className="work-title">Teaching Assistant and Peer Mentor</h1>
                        <h1 className="work-subtitle">UNLV College of Engineering</h1> <br/>
                        <p className="work-desc">
                            <b>
                            ∙ Worked with first-year and second-year computer science students to provide guidance and tutoring
                            in the student’s classes and first-year seminar engineering projects. <br/>
                            ∙ Projects included: Web application development with Google App Inventor,
                            mobile application development with Android Studio, and drone programming in Python.
                            </b>
                        </p>
                        <hr style={{ backgroundColor: '#b3ada6' }}/>
                        <br/>
                        <button className="b1 resume">My Resume</button>
                    </TimelineItem>
                </Timeline>
            </div>
        </a>
    );
}