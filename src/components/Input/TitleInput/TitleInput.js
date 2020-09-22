import React from 'react';

import classes from './TitleInput.module.css';

const TitleInput = props => {
    let value = (props.type === "edit") ? props.post.title : "";

    return (
        <div className={classes.TitleInput}>
            <p>Title</p>
            <input
                autoComplete="off"
                defaultValue={value}
                id="blogTitle"
                placeholder="Enter the blog title here">
            </input>
        </div>
    );
}

export default TitleInput;