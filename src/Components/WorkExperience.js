import React from 'react';

import './WorkExperience.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as WorkIcon } from './work.svg';
import { ReactComponent as SchoolIcon } from './school.svg';


export default props => {
    return(
        <a name="experience">
            <h1 className="header">Work Experience and Education</h1>
            {/* <h1 className="header sub"></h1> */}
            <VerticalTimeline>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#5b5853', fontFamily: 'Helvetica', fontWeight: '900' }}
                    contentArrowStyle={{ borderRight: '6px solid #8b8378' }}
                    date="08/2015 to 05/2020"
                    dateClassName="date-text"
                    iconStyle={{ background: '#b5dbd4', color: '#fff', height: '50px', width: '50px' }}
                    icon={<SchoolIcon />}
                >
                    <h1 className="work-title">Bachelor's of Science in Computer Science</h1>
                    <h1 className="work-subtitle">University of Nevada, Las Vegas</h1>
                    <p className="work-desc" style={{ fontSize: '90%' }} >
                        <b>
                        Concentration: Information Assurance<br/>
                        Minor: Mathematics<br/>
                        Honors: Cum Laude<br/>
                        </b>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#5b5853', fontFamily: 'Muli', fontWeight: '900' }}
                    contentArrowStyle={{ borderRight: '6px solid #8b8378' }}
                    date="04/2018 to Present"
                    dateClassName="date-text"
                    iconStyle={{ background: '#b5dbd4', color: '#fff', height: '50px', width: '50px' }}
                    icon={<WorkIcon />}
                >
                    <h1 className="work-title">Network Technician</h1>
                    <h1 className="work-subtitle">UNLV Network Development and Engineering</h1>
                    <p className="work-desc" style={{ fontSize: '80%' }} >
                        <b>
                        {/* <center>Main Duties:<br/></center> */}
                        ∙ Configuring, installing, and troubleshooting Cisco switches, voice gateways, uninterruptible power supplies (UPS), and wireless access points<br/>
                        ∙ Cabling and tracing of data and fiber infrastructure<br/>
                        ∙ Worked with customers to troubleshoot and resolve connectivity issues<br/>
                        ∙ Created IP address reservations and DNS records using Infoblox<br/>
                        ∙ Basic automation scripting to assist network engineers with projects<br/>
                        </b>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#5b5853', fontFamily: 'Helvetica', fontWeight: '900' }}
                    contentArrowStyle={{ borderRight: '6px solid #8b8378' }}
                    date="08/2018 to 05/2019"
                    dateClassName="date-text"
                    iconStyle={{ background: '#b5dbd4', color: '#fff', height: '50px', width: '50px' }}
                    icon={<WorkIcon />}
                >
                    <h1 className="work-title">Teaching Assistant and Peer Mentor</h1>
                    <h1 className="work-subtitle">UNLV College of Engineering</h1>
                    <p className="work-desc" style={{ fontSize: '85%' }}>
                        <b>
                        Worked with first-year and second-year computer science students to provide guidance and tutoring
                        in the student’s classes and first-year seminar engineering projects.
                        Projects included: Web application development with Google App Inventor,
                        mobile application development with Android Studio, and drone programming in Python.
                        </b>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </a>
    );
}