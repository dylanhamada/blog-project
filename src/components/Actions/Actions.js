import React from 'react';

import classes from './Actions.module.css';
import Action from './Action/Action';

const Actions = props => {
    let actionList;
    let actionsStyle = classes.Actions;

    // Render Action components depending on app state "screen" property
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
                    <Action text="Accept" type="new" />
                </>
            );
            actionsStyle = classes.ActionsInput;
            break;
        case 'edit':
            actionList = (
                <>
                    <Action text="Cancel" type="edit" post={props.post} />
                    <Action text="Accept" type="edit" />
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