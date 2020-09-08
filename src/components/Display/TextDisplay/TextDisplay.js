import React, { useEffect, useRef } from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = props => {
    const textBox = useRef(null);
    let maxHeight;

    if (props.maxHeight) {
        maxHeight = {
            maxHeight: "none"
        };
    }

    useEffect(() => {
        const boxHeight = textBox.current.offsetHeight;

        if (!props.noGradient) {
            if (boxHeight > 149) { props.gradientToggle() }
        }
    });

    return (
        <p style={maxHeight} className={classes.TextDisplay} ref={textBox}>{props.blogText}</p>
    );
};

export default TextDisplay;