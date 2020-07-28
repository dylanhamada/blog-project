import React from 'react';

import classes from './Input.module.css';
import TitleInput from './TitleInput/TitleInput';
import BlogInput from './BlogInput/BlogInput';
import Submit from '../UI/Buttons/Submit';

const Input = props => {
    return (
        <div className={classes.Input}>
            <TitleInput />
            <BlogInput />
            <Submit />
        </div>
    );
}

export default Input;