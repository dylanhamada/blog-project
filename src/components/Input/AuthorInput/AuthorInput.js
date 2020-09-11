import React from 'react';

import classes from './AuthorInput.module.css';

const AuthorInput = props => {
    let value = (props.type === "edit") ? props.post.author : "";

    return (
        <div className={classes.AuthorInput}>
            <p>Author</p>
            <input id="blogAuthor" defaultValue={value} placeholder="Enter your name here"></input>
        </div>
    );
};

export default AuthorInput;