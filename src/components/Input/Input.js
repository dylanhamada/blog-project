import React from 'react';

import Aux from '../../hoc/_Aux/_Aux';
import TitleInput from './TitleInput/TitleInput';
import BlogInput from './BlogInput/BlogInput';
import Button from '../UI/Button/Button';

const Input = props => {
    return (
        <Aux>
            <TitleInput />
            <BlogInput />
            <Button />
        </Aux>
    );
}

export default Input;