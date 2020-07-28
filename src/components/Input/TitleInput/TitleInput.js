import React from 'react';

import classes from './TitleInput.module.css';

const TitleInput = props => {
    return (
        <input id="blogTitle" className={classes.TitleInput} placeholder="Blog post title"></input>
    );
}

export default TitleInput;