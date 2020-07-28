import React from 'react';

import classes from './BlogInput.module.css';

const BlogInput = props => {
    return (
        <textarea id="blogBody" className={classes.BlogInput} placeholder="Blog post text" rows="10"></textarea>
    );
}

export default BlogInput;