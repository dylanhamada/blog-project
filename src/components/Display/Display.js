import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    let display = null;
    let blogPosts = null;

    if (props.show) {
        if (props.posts) {
            const postKeys = Object.keys(props.posts);

            blogPosts = postKeys.map(post => {
                let currentPost = props.posts[post];

                return (
                    <DisplayBox key={post} id={post} blogTitle={currentPost.title} blogText={currentPost.body} blogDate={currentPost.date} />
                );
            });
        }

        display = (
            <div className={classes.Display}>
                {blogPosts}
            </div>
        );
    }

    return (
        <>
            {display}
        </>
    );
}

export default Display;