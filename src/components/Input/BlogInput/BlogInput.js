import React from 'react';

import classes from './BlogInput.module.css';

const BlogInput = props => {
    return (
        <div className={classes.BlogInput}>
            <p>Blog Text</p>
            <textarea id="blogBody" placeholder="Blog Post Text" rows="10"></textarea>
        </div>
    );
}

export default BlogInput;