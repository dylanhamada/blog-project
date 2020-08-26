import React from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = React.forwardRef((props, ref) => {
    return (
        <p className={classes.TextDisplay} ref={ref}>{props.blogText}</p>
    );
});

export default TextDisplay;