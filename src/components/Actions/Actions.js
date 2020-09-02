import React from 'react';

import classes from './Actions.module.css';
import Aux from '../../hoc/_Aux/_Aux';
import Action from './Action/Action';

const Actions = props => {
    let actionList;

    switch (props.screen) {
        case 'new':
            actionList = (
                <Aux>
                    <Action text="Cancel" />
                    <Action text="Accept" />
                </Aux>
            );
            break;
        case 'post':
            actionList = (
                <Aux>
                    <Action text="Edit" />
                    <Action text="Delete" />
                </Aux>
            );
            break;
        default:
            actionList = (
                <Action text="New Post" />
            );
            break;
    }

    return (
        <div className={classes.Actions}>
            {actionList}
        </div>
    );
}

export default Actions;