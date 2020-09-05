import React from 'react';

import classes from './DateDisplay.module.css';

const DateDisplay = props => {
    return (
        <p className={classes.DateDisplay}>by <span className={classes.author}>{props.blogAuthor}</span> on {props.blogDate}</p>
    );
}

export default DateDisplay;