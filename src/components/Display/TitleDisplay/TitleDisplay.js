import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';

import classes from './TitleDisplay.module.css';

import chevron from '../../../assets/icons/chevron-down.svg';
import cross from '../../../assets/icons/cross.svg';

const TitleDisplay = props => {
    const authContext = useContext(AuthContext);
    const closeInput = () => {
        authContext.action("home");
        authContext.display();
        authContext.showPost();
    };
    let closeButton = null;

    if (props.showClose) {
        closeButton = (
            <>
                <img src={chevron} className={classes.ChevronClose} onClick={closeInput} alt="close" />
                <img src={cross} className={classes.CrossClose} onClick={closeInput} alt="close" />
            </>
        );
    }

    return (
        <div className={classes.TitleDisplay}>
            <h2 className={classes.TitleDisplay}>{props.blogTitle}</h2>
            {closeButton}
        </div>
    );
}

export default TitleDisplay;