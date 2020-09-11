import React from 'react';

import classes from './TitleInput.module.css';

const TitleInput = props => {
    let value = (props.type === "edit") ? props.post.title : "";

    return (
        <div className={classes.TitleInput}>
            <p>Title</p>
            <input id="blogTitle" defaultValue={value} placeholder="Enter the blog title here"></input>
        </div>
    );
}

export default TitleInput;