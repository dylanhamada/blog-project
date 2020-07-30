import React, { useContext } from 'react';

import classes from './Input.module.css';
import AuthContext from './../../context/auth-context';
import TitleInput from './TitleInput/TitleInput';
import BlogInput from './BlogInput/BlogInput';
import Button from '../UI/Button/Button';

const Input = props => {
    const authContext = useContext(AuthContext);
    const submitStyles = {
        margin: '10px 0'
    };
    const cancelStyles = {
        margin: '0 0 10px 0'
    };

    return (
        <div className={classes.Input}>
            <TitleInput />
            <BlogInput />
            <Button clicked={authContext.submit} buttonText="Submit" buttonStyles={submitStyles} />
            <Button clicked={authContext.cancel} buttonText="Cancel" buttonStyles={cancelStyles} />
        </div>
    );
}

export default Input;