import React from 'react';

const authContext = React.createContext({
    posts: [],
    submit: () => { }
});

export default authContext;