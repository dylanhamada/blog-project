import React, { useContext } from 'react';

import AuthContext from '../../../context/auth-context';

const Button = props => {
    const authContext = useContext(AuthContext);

    return (
        <button>Submit</button>
    );
};

export default Button;