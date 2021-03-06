import React from 'react';

import classes from './DateDisplay.module.css';

const DateDisplay = props => {
    // If "edited" property in app state singlePost property, prepend the following
    let edited = props.blogEdited ? "edited " : null;

    return (
        <p className={classes.DateDisplay}>{edited}by <span className={classes.author}>{props.blogAuthor}</span> on {props.blogDate}</p>
    );
}

export default DateDisplay;