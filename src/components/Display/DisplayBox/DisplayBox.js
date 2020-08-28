import React, { useState } from 'react';

import classes from './DisplayBox.module.css';
import TitleDisplay from './../TitleDisplay/TitleDisplay';
import TextDisplay from './../TextDisplay/TextDisplay';
import DateDisplay from './../DateDisplay/DateDisplay';

const DisplayBox = props => {
    const [boxClass, setClass] = useState(classes.DisplayBox);

    const gradientToggle = () => {
        setClass(classes.DisplayBoxLong);
    };

    return (
        <div className={boxClass}>
            <TitleDisplay blogTitle={props.blogTitle} />
            <DateDisplay blogDate={props.blogDate} />
            <TextDisplay blogText={props.blogText} gradientToggle={gradientToggle} />
        </div>
    );
}

export default DisplayBox;