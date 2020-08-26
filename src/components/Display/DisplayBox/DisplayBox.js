import React, { useEffect, useRef } from 'react';

import classes from './DisplayBox.module.css';
import TitleDisplay from './../TitleDisplay/TitleDisplay';
import TextDisplay from './../TextDisplay/TextDisplay';
import DateDisplay from './../DateDisplay/DateDisplay';

const DisplayBox = props => {
    const displayBox = useRef(null);
    const textDisplay = useRef(null);
    let displayClass = classes.DisplayBox;

    useEffect(() => {
        if (textDisplay.current.offsetHeight < 150) {
            console.log("Smaller than max height");
            displayClass = classes.DisplayBoxLong;
        }
    }, [displayBox, textDisplay]);

    return (
        <div className={displayClass} ref={displayBox}>
            <TitleDisplay blogTitle={props.blogTitle} />
            <DateDisplay blogDate={props.blogDate} />
            <TextDisplay blogText={props.blogText} ref={textDisplay} />
        </div>
    );
}

export default DisplayBox;