import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    let blogPosts = null;

    if (props.posts) {
        blogPosts = props.posts.map(post => {
            return (
                <DisplayBox key={post.title} blogTitle={post.title} blogText={post.body} blogDate={post.date} />
            );
        });
    }

    return (
        <div className={classes.Display}>
            {blogPosts}
        </div>
    );
}

export default Display;