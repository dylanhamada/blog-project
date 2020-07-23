import React from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = props => {
    return (
        <div className={classes.textDisplay}>{props.blogText}</div>
    );
}

export default TextDisplay;