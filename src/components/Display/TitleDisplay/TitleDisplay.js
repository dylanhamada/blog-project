import React from 'react';

import classes from './TitleDisplay.module.css';

const TitleDisplay = props => {
    return (
        <h2 className={classes.TitleDisplay}>{props.blogTitle}</h2>
    );
}

export default TitleDisplay;