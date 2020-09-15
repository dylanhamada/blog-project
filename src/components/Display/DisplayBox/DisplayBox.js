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
    const boxClick = id => {
        authContext.post(id);
        authContext.display();
        authContext.showPost();
    };

    return (
        <div className={boxClass} onClick={() => boxClick(props.id)}>
            <TitleDisplay blogTitle={props.blogTitle} />
            <DateDisplay blogAuthor={props.blogAuthor} blogDate={props.blogDate} blogEdited={props.blogEdited} />
            <TextDisplay blogText={props.blogText} gradientToggle={gradientToggle} />
        </div>
    );
}

export default DisplayBox;