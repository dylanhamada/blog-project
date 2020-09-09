import React from 'react';

const authContext = React.createContext({
    action: () => { },
    display: () => { },
    input: () => { },
    post: () => { },
    showPost: () => { },
    submit: () => { }
});

export default authContext;