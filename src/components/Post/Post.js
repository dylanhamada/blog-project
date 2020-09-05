import React, { useContext } from 'react';

import classes from './Post.module.css';

import TitleDisplay from './../Display/TitleDisplay/TitleDisplay';
import DateDisplay from './../Display/DateDisplay/DateDisplay';
import TextDisplay from './../Display/TextDisplay/TextDisplay';

const Post = props => {
    let post = null;

    if (props.post) {
        post = (
            <>
                <TitleDisplay blogTitle={props.post.title} />
                <DateDisplay blogAuthor={props.post.author} blogDate={props.post.date} />
                <TextDisplay blogText={props.post.body} />
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

