import React from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = props => {
    return (
        <p className={classes.TextDisplay}>{props.blogText}</p>
    );
}

export default TextDisplay;