import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    let blogPosts = null;

    if (props.posts) {
        const postKeys = Object.keys(props.posts);

        blogPosts = postKeys.map(post => {
            let currentPost = props.posts[post];

            return (
                <DisplayBox key={post} blogTitle={currentPost.title} blogText={currentPost.body} blogDate={currentPost.date} />
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