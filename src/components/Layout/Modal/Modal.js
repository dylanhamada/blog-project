import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    let modal = null;
    let backdrop = null;

    if (props.show) {
        modal = (
            <div className={classes.Modal}>
                {props.children}
            </div>
        );
        backdrop = <Backdrop clicked={props.closeModal} />
    }

    return (
        <Aux>
            {backdrop}
            {modal}
        </Aux>
    );
};

export default Modal;