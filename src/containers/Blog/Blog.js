import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';
import Input from '../../components/Input/Input';

class Blog extends Component {
    state = {
        posts: [
            {
                title: 'blog title 1',
                body: 'blog body text',
                date: 'blog date'
            }
        ]
    }

    submitBlogHandler = () => {

    }

    render() {
        return (
            <AuthContext.Provider value={{ posts: this.state.posts, submit: this.submitBlogHandler }}>
                <Input />
            </AuthContext.Provider>
        );
    }
}

export default Blog;