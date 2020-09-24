import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';

import classes from './TitleDisplay.module.css';

import chevron from '../../../assets/icons/chevron-down.svg';
import cross from '../../../assets/icons/cross.svg';

const TitleDisplay = props => {
    const authContext = useContext(AuthContext);
    // When TitleDisplay rendered as a child of Post component, close it
    const close = () => {
        authContext.action("home");
        authContext.display();
        authContext.showPost();
    };
    let closeButton = null;

    // Render close icons when TitleDisplay rendered as child of Post component
    if (props.showClose) {
        closeButton = (
            <>
                <img src={chevron} className={classes.ChevronClose} onClick={close} alt="close" />
                <img src={cross} className={classes.CrossClose} onClick={close} alt="close" />
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