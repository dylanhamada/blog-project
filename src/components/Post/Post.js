import React from 'react';

import classes from './Post.module.css';

import TitleDisplay from './../Display/TitleDisplay/TitleDisplay';
import DateDisplay from './../Display/DateDisplay/DateDisplay';
import TextDisplay from './../Display/TextDisplay/TextDisplay';

const Post = props => {
    let post = null;

    if (props.post && props.show) {
        post = (
            <>
                <TitleDisplay blogTitle={props.post.title} showClose />
                <DateDisplay blogAuthor={props.post.author} blogDate={props.post.date} blogEdited={props.post.edited} />
                <TextDisplay blogText={props.post.body} noGradient maxHeight />
            </>
        );
    }

    return (
        <div className={classes.Post}>
            {post}
        </div>
    );
};

export default Post;

