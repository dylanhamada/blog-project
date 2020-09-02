import React from 'react';

import classes from './TitleInput.module.css';

const TitleInput = props => {
    return (
        <div className={classes.TitleInput}>
            <p>Title</p>
            <input id="blogTitle" placeholder="Enter the blog title here"></input>
        </div>
    );
}

export default TitleInput;