import React from 'react';

import classes from './BlogInput.module.css';

const BlogInput = props => {
    let value = (props.type === "edit") ? props.post.body : "";

    return (
        <div className={classes.BlogInput}>
            <p>Blog Text</p>
            <textarea
                autoComplete="off"
                defaultValue={value}
                id="blogBody"
                placeholder="Enter the blog text here">
            </textarea>
        </div>
    );
}

export default BlogInput;