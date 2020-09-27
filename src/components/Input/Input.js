import React from 'react';

import classes from './Input.module.css';
import InputHeader from './InputHeader/InputHeader';
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BlogInput from './BlogInput/BlogInput';

const Input = props => {
    let post = props.post ? props.post : null;

    let input = props.show ? (
        <div className={classes.Input}>
            <InputHeader type={props.type} post={post} />
            <TitleInput type={props.type} post={post} warning={props.warnings.title} />
            <AuthorInput type={props.type} post={post} warning={props.warnings.author} />
            <BlogInput type={props.type} post={post} warning={props.warnings.text} />
        </div>
    ) : null;

    return input;
}

export default Input;