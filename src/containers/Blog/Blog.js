import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';

class Blog extends Component {
    state = {
        posts: []
    }

    submitBlogHandler = () => {
        const blogPosts = this.state.posts;
        const blogTitle = document.querySelector("#blogTitle");
        const blogBody = document.querySelector("#blogBody");
        const blogDate = new Date();

        if (blogTitle.value && blogBody.value) {
            const newPost = {
                title: blogTitle.value,
                body: blogBody.value,
                date: blogDate
            };
            const updatedPosts = blogPosts.push(newPost);

            this.setState({
                posts: updatedPosts
            });

            blogTitle.value = "";
            blogBody.value = "";

            console.log(this.state.posts);
        }
    }

    render() {
        return (
            <Aux>
                <AuthContext.Provider value={{ posts: this.state.posts, submit: this.submitBlogHandler }}>
                    <Input />
                    <Display />
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default Blog;