import React from 'react';

import classes from './Actions.module.css';
import Aux from '../../hoc/_Aux/_Aux';
import Button from '../UI/Button/Button';

const Actions = props => {
    let buttonList;

    switch (props.screen) {
        case 'home':
            buttonList = (
                <Button buttonText="New Post" />
            );
            break;
        case 'new':
            buttonList = (
                <Aux>
                    <Button buttonText="Cancel" />
                    <Button buttonText="Accept" />
                </Aux>
            );
            break;
        case 'post':
            buttonList = (
                <Aux>
                    <Button buttonText="Edit" />
                    <Button buttonText="Delete" />
                </Aux>
            );
        default:
            buttonList = (
                <Button buttonText="New Post" />
            );
            break;
    }

    return (
        <div className={classes.Actions}>
            {buttonList}
        </div>
    );
}

export default Actions;