import React from 'react';

import classes from './DateDisplay.module.css';

const DateDisplay = props => {
    return (
        <div className={classes.dateDisplay}>{props.blogDate}</div>
    );
}

export default DateDisplay;