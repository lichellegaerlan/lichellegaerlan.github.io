import React from 'react';
import './Header.css';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

export default props => {
    return(
        <div className="small-pink">
            <Navigation />

            <div className="logo-right">
                <Link className="name" to="/">lichelle <b><b>gaerlan</b></b></Link>
                {/* <h1 id="name">lichelle <b>gaerlan</b></h1> */}
            </div>
        </div>
    )
}