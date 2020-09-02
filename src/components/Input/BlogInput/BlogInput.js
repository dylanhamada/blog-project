import React from 'react';

import classes from './BlogInput.module.css';

const BlogInput = props => {
    return (
        <div className={classes.BlogInput}>
            <p>Blog Text</p>
            <textarea id="blogBody" placeholder="Enter the blog text here"></textarea>
        </div>
    );
}

export default BlogInput;