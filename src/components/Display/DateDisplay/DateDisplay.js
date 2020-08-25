import React from 'react';

import classes from './DateDisplay.module.css';

const DateDisplay = props => {
    return (
        <p className={classes.DateDisplay}>{props.blogDate}</p>
    );
}

export default DateDisplay;