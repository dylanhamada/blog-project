import React from 'react';

import classes from './AuthorInput.module.css';

const AuthorInput = props => {
    let value = (props.type === "edit") ? props.post.author : "";
    let inputWarning = props.warning ? { background: "#ffe5f2" } : null;

    return (
        <div className={classes.AuthorInput}>
            <p>Author</p>
            <input
                autoComplete="off"
                defaultValue={value}
                id="blogAuthor"
                placeholder="Enter your name here"
                style={inputWarning}>
            </input>
        </div>
    );
};

export default AuthorInput;