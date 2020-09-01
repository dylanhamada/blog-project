import React from 'react';

import classes from './TitleInput.module.css';

const TitleInput = props => {
    return (
        <div className={classes.TitleInput}>
            <p>Title</p>
            <input id="blogTitle" placeholder="Blog Post Title"></input>
        </div>
    );
}

export default TitleInput;