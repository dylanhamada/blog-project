import React from 'react';

import classes from './DisplayBox.module.css';
import TitleDisplay from './../TitleDisplay/TitleDisplay';
import TextDisplay from './../TextDisplay/TextDisplay';
import DateDisplay from './../DateDisplay/DateDisplay';

const DisplayBox = props => {
    return (
        <div className={classes.DisplayBox}>
            <TitleDisplay blogTitle={props.blogTitle} />
            <TextDisplay blogText={props.blogText} />
            <DateDisplay blogDate={props.blogDate} />
        </div>
    );
}

export default DisplayBox;