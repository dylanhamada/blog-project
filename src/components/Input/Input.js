import React from 'react';

import classes from './Input.module.css';
<<<<<<< HEAD
import InputHeader from './InputHeader/InputHeader';
=======
>>>>>>> 226073ac01fe7d7e1fe28f0631a7d91d1f954fa5
import TitleInput from './TitleInput/TitleInput';
import AuthorInput from './AuthorInput/AuthorInput';
import BlogInput from './BlogInput/BlogInput';
<<<<<<< HEAD

const Input = props => {
    let input = props.show ? (
        <div className={classes.Input}>
            <InputHeader />
=======

import close from '../../assets/icons/chevron-down.svg';

const Input = props => {
    const show = props.show ? classes.Input : classes.Hide;

    return (
        <div className={show}>
            <h2>New Post</h2>
            <span><img src={close} className={classes.Close} alt="close" /></span>
>>>>>>> 226073ac01fe7d7e1fe28f0631a7d91d1f954fa5
            <TitleInput />
            <AuthorInput />
            <BlogInput />
        </div>
    ) : null;

    return (
        <>
            {input}
        </>
    );
}

export default Input;