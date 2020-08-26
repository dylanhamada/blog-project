import React from 'react';

import classes from './DateDisplay.module.css';

const DateDisplay = props => {
    return (
        <p className={classes.DateDisplay}>by <span className={classes.author}>Dylan Hamada</span> on {props.blogDate}</p>
    );
}

export default DateDisplay;