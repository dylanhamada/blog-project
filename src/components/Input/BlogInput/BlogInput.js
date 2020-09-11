import React from 'react';

import classes from './BlogInput.module.css';

const BlogInput = props => {
    let value = (props.type === "edit") ? props.post.body : "";

    return (
        <div className={classes.BlogInput}>
            <p>Blog Text</p>
            <textarea id="blogBody" defaultValue={value} placeholder="Enter the blog text here"></textarea>
        </div>
    );
}

export default BlogInput;