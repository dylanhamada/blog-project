import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    const show = props.show ? classes.Display : classes.Hide;
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
        <div className={show}>
            {blogPosts}
        </div>
    );
}

export default Display;