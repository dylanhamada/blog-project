import React from 'react';

import classes from './Input.module.css';
import InputHeader from './InputHeader/InputHeader';
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BlogInput from './BlogInput/BlogInput';

const Input = props => {
    let input = props.show ? (
        <div className={classes.Input}>
            <InputHeader type={props.type} postId={props.post.id} />
            <TitleInput type={props.type} post={props.post} />
            <AuthorInput type={props.type} post={props.post} />
            <BlogInput type={props.type} post={props.post} />
        </div>
    ) : null;

    return (
        <>
            {input}
        </>
    );
}

export default Input;