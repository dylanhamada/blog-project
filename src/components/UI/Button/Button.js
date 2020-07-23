import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';

const Button = props => {
    const authContext = useContext(AuthContext);

    return (
        <button onClick={authContext.submit}>Submit</button>
    );
};

export default Button;