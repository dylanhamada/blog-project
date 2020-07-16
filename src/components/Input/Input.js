import React from 'react';

import TitleInput from './TitleInput/TitleInput';
import BlogInput from './BlogInput/BlogInput';

const input = props => {
    return (
        <div>
            <TitleInput />
            <BlogInput />
            <div>Submit Button</div>
        </div>
    );
}

export default input;