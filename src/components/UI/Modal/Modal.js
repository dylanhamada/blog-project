import React from 'react';

import classes from './Modal.module.css';

const Modal = props => (
    <div className={classes.Modal} style={props.newStyle}>
        {props.children}
    </div>
);

export default Modal;