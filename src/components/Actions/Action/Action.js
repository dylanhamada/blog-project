import React from 'react';

import classes from './Action.module.css';

import acceptPost from '../../../assets/icons/checkmark.svg';
import cancelPost from '../../../assets/icons/cross.svg';
import deletePost from '../../../assets/icons/trash.svg';
import editPost from '../../../assets/icons/document-edit.svg';
import newPost from '../../../assets/icons/pencil.svg';

const Action = props => {
    let icon;

    switch (props.text) {
        case "New Post":
            icon = (<img src={newPost} alt="New Post" />);
            break;
        case "Cancel":
            icon = (<img src={cancelPost} alt="Cancel" />);
            break;
        case "Accept":
            icon = (<img src={acceptPost} alt="Accept" />);
            break;
        case "Edit":
            icon = (<img src={editPost} alt="Edit" />);
            break;
        case "Delete":
            icon = (<img src={deletePost} alt="Delete" />);
            break;
        default:
            icon = (<img src={newPost} alt="New Post" />);
            break;
    }

    return (
        <div className={classes.Action} onClick={props.clicked}>
            <span className={classes.Icon}>
                {icon}
            </span>
            <span className={classes.Text}>
                {props.text}
            </span>
        </div>
    );
};

export default Action;