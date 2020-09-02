import React from 'react';

import classes from './AuthorInput.module.css';

const AuthorInput = props => {
    return (
        <div className={classes.AuthorInput}>
            <p>Author</p>
            <input id="blogAuthor" placeholder="Enter your name here"></input>
        </div>
    );
};

export default AuthorInput;