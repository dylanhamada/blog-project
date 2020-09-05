import React, { useContext, useState } from 'react';

import AuthContext from '../../../context/auth-context';
import classes from './DisplayBox.module.css';

import TitleDisplay from './../TitleDisplay/TitleDisplay';
import TextDisplay from './../TextDisplay/TextDisplay';
import DateDisplay from './../DateDisplay/DateDisplay';

const DisplayBox = props => {
    const authContext = useContext(AuthContext);
    const [boxClass, setClass] = useState(classes.DisplayBox);
    const gradientToggle = () => {
        setClass(classes.DisplayBoxLong);
    };

    return (
        <div className={boxClass} onClick={() => authContext.post(props.id)}>
            <TitleDisplay blogTitle={props.blogTitle} />
            <DateDisplay blogAuthor={props.blogAuthor} blogDate={props.blogDate} />
            <TextDisplay blogText={props.blogText} gradientToggle={gradientToggle} />
        </div>
    );
}

export default DisplayBox;