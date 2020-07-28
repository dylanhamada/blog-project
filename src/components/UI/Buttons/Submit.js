import React, { useContext } from 'react';

import classes from './Submit.module.css';

import AuthContext from '../../../context/auth-context';

const Button = props => {
    const authContext = useContext(AuthContext);

    return (
        <button type="button" className={classes.Submit} onClick={authContext.submit}>Submit</button>
    );
};

export default Button;