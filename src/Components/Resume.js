import React from 'react';

import './Resume.css';
import Resume from './LichelleMaeGaerlan_Resume.pdf';

export default props => {
    return(
        <div className="resume">
            <embed src={Resume} type="application/pdf" height="100%" width="100%" scrolling="auto" frameBorder="0" />
        </div>
    );
}