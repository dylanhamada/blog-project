import React from 'react';

import classes from './Input.module.css';
import TitleInput from './TitleInput/TitleInput';
import BlogInput from './BlogInput/BlogInput';

import close from '../../assets/icons/chevron-down.svg';

const Input = props => {
    const show = props.show ? classes.Input : classes.Hide;

    return (
        <div className={show}>
            <h2>New Post</h2>
            <span><img src={close} className={classes.Close} alt="close" /></span>
            <TitleInput />
            <BlogInput />
        </div>
    );
}

export default Input;