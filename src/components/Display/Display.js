import React, { useContext } from 'react';

import classes from './Display.module.css';
import AuthContext from '../../context/auth-context';
import DisplayBox from './DisplayBox/DisplayBox';

const Display = props => {
    const authContext = useContext(AuthContext);

    let blogPosts = null;

    if (authContext.posts) {
        blogPosts = authContext.posts.map(post => {
            return (
                <DisplayBox key={post.title} blogTitle={post.title} blogText={post.body} blogDate={post.date} />
            );
        });
    }

    return (
        <div className={classes.Display}>
            {blogPosts}
        </div>
    );
}

export default Display;