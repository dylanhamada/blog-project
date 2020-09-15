import React from 'react';

const authContext = React.createContext({
    action: () => { },
    display: () => { },
    delete: () => { },
    input: () => { },
    post: () => { },
    showPost: () => { },
    submitEdit: () => { },
    submitNew: () => { }
});

export default authContext;