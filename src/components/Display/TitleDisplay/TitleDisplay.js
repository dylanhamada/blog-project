import React from 'react';

import classes from './TitleDisplay.module.css';

const TitleDisplay = props => {
    return (
        <div className={classes.titleDisplay}>{props.blogTitle}</div>
    );
}

export default TitleDisplay;