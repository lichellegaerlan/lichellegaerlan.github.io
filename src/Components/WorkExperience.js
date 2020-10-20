import React from 'react';

import './WorkExperience.css';
import { Jumbotron } from 'react-bootstrap';

import { ReactComponent as WorkIcon } from './work.svg';
import { ReactComponent as SchoolIcon } from './school.svg';

export default props => {
    return(
        <a name="experience">
            <div className="work-experience">
                <Jumbotron className="work-container" style={{ backgroundColor: "#fff" }}>
                    <h1 className="work-title"><b>Education</b></h1>
                    <h2 className="work-sub"><b>University of Nevada, Las Vegas</b></h2>
                    <p>
                        <font color="#986359">AUGUST 2015 — MAY 2020</font> <br/> <br/>
                        Bachelor's of Science, Computer Science <br/>
                        Minor: Mathematics <br/>
                        Concentration: Information Assurance <br/>
                        Honors: Cum Laude <br/>
                    </p>
                </Jumbotron>

                <Jumbotron className="work-container" style={{ backgroundColor: "#f4efee" }}>
                    <h1 className="work-title"><b>Network Technician</b></h1>
                    <h2 className="work-sub"><b>UNLV Network Development and Engineering</b></h2>
                    <p>
                        <font color="#986359">APRIL 2018 — PRESENT</font> <br/> <br/>
                    </p>
                </Jumbotron>

                <Jumbotron className="work-container" style={{ backgroundColor: "#fff" }}>
                    <h1 className="work-title"><b>Teaching Assistant and Peer Mentor</b></h1>
                    <h2 className="work-sub"><b>UNLV College of Engineering</b></h2>
                    <p>
                        <font color="#986359">AUGUST 2018 — MAY 2019</font> <br/> <br/>
                    </p>
                </Jumbotron>
            </div>
        </a>
    );
}