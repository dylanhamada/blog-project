import React from 'react';

import classes from './Display.module.css';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    let display = null;
    let blogPosts = null;

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

        display = (
            <div className={classes.Display}>
                {blogPosts}
            </div>
        );
    }

    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    );
}

export default Display;