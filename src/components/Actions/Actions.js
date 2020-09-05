import React from 'react';

import classes from './Actions.module.css';
import Action from './Action/Action';

const Actions = props => {
    let actionList;
    let actionsStyle = classes.Actions;

    switch (props.screen) {
        case 'home':
            actionList = (
                <Action text="New Post" />
            );
            break;
        case 'new':
            actionList = (
                <>
                    <Action text="Cancel" />
                    <Action text="Accept" />
                </>
            );
            actionsStyle = classes.ActionsInput;
            break;
        case 'post':
            actionList = (
                <>
                    <Action text="Edit" />
                    <Action text="Delete" />
                </>
            );
            break;
        default:
            actionList = (
                <Action text="New Post" />
            );
            break;
    }

    return (
        <div className={actionsStyle}>
            {actionList}
        </div>
    );
}

export default Actions;