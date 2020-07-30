import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    return (
        <button type="button" className={classes.Button} onClick={props.clicked} style={props.buttonStyles}>{props.buttonText}</button>
    );
};

export default Button;