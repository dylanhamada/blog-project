import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    let blogPosts = null;

    /* If app state showDisplay prop is true, and app state posts prop
    is not falsy, create an array of DisplayBox components */
    if (props.show) {
        if (props.posts) {
            blogPosts = props.posts.map(post => (
                <DisplayBox
                    key={post.id}
                    id={post.id}
                    blogTitle={post.title}
                    blogDate={post.date}
                    blogAuthor={post.author}
                    blogText={post.body}
                    blogEdited={post.edited} />
            ));
        }
    }

    return (
        <div className={classes.Display}>
            {blogPosts}
        </div>
    );
}

export default Display;