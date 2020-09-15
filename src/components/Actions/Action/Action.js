import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';
import classes from './Action.module.css';

import acceptPost from '../../../assets/icons/checkmark.svg';
import cancelPost from '../../../assets/icons/cross.svg';
import deletePost from '../../../assets/icons/trash.svg';
import editPost from '../../../assets/icons/document-edit.svg';
import newPost from '../../../assets/icons/pencil.svg';

const Action = props => {
    const authContext = useContext(AuthContext);
    let clicked;
    let icon;

    switch (props.text) {
        case "New Post":
            clicked = () => {
                authContext.input("new");
                authContext.action("new");
                authContext.display();
            };
            icon = (<img src={newPost} alt="New Post" />);
            break;
        case "Cancel":
            clicked = () => {
                authContext.input();
                authContext.action("home");
                authContext.display();
            }
            icon = (<img src={cancelPost} alt="Cancel" />);
            break;
        case "Accept":
            if (props.type === "new") {
                clicked = () => {
                    authContext.submitNew();
                    authContext.input();
                    authContext.display();
                    authContext.action("home");
                }
            } else {
                clicked = () => {
                    authContext.submitEdit();
                    authContext.input();
                    authContext.display();
                    authContext.action("home");
                }
            }
            icon = (<img src={acceptPost} alt="Accept" />);
            break;
        case "Edit":
            icon = (<img src={editPost} alt="Edit" />);
            clicked = () => {
                authContext.input("edit");
                authContext.action("edit");
                authContext.showPost();
            };
            break;
        case "Delete":
            icon = (<img src={deletePost} alt="Delete" />);
            clicked = () => {
                authContext.delete();
                authContext.showPost();
                authContext.display();
                authContext.action("home");
            };
            break;
        default:
            clicked = () => {
                authContext.input();
                authContext.action("new");
            };
            icon = (<img src={newPost} alt="New Post" />);
            break;
    }

    return (
        <div className={classes.Action} onClick={clicked}>
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