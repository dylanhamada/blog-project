import React, { useEffect, useRef } from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = props => {
    const textBox = useRef(null);

    useEffect(() => {
        const boxHeight = textBox.current.offsetHeight;

        if (boxHeight > 149) { props.gradientToggle() }
    });

    return (
        <p className={classes.TextDisplay} ref={textBox}>{props.blogText}</p>
    );
};

export default TextDisplay;