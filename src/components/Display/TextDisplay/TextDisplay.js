import React, { useEffect, useRef } from 'react';

import classes from './TextDisplay.module.css';

const TextDisplay = props => {
    const textBox = useRef(null);

    /* Check if rendered paragraph element is taller than 149 pixels,
    and if true, call gradientToggle to apply a white gradient overlay */
    useEffect(() => {
        const boxHeight = textBox.current.offsetHeight;

        if (!props.noGradient) {
            if (boxHeight > 149) { props.gradientToggle() }
        }
    });

    return (
        <p className={classes.TextDisplay} ref={textBox}>{props.blogText}</p>
    );
};

export default TextDisplay;