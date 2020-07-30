import React from 'react';

const authContext = React.createContext({
    submit: () => { },
    cancel: () => { }
});

export default authContext;