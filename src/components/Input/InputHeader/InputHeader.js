import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';

import classes from './InputHeader.module.css';

import chevron from '../../../assets/icons/chevron-down.svg';
import cross from '../../../assets/icons/cross.svg';

const Header = props => {
    const authContext = useContext(AuthContext);
    const closeInput = () => {
        authContext.input();
        authContext.action("home");
        authContext.display();
    };
    let headerText = (props.type === "new") ? "New Post" : "Edit Post";

    return (
        <div className={classes.Header}>
            <h2>{headerText}</h2>
            <img src={chevron} className={classes.ChevronClose} onClick={closeInput} alt="close" />
            <img src={cross} className={classes.CrossClose} onClick={closeInput} alt="close" />
        </div>
    );
}

export default Header;