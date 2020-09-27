import React from 'react';

const authContext = React.createContext({
    action: () => { },
    clear: () => { },
    display: () => { },
    delete: () => { },
    input: () => { },
    post: () => { },
    showPost: () => { },
    submitEdit: () => { },
    submitNew: () => { }
});

export default authContext;