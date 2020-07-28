import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import NewPost from '../../components/UI/Buttons/NewPost';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';

class Blog extends Component {
    state = {
        posts: [],
        showInput: false
    }

    submitBlogHandler = () => {
        const blogPosts = this.state.posts;
        const blogTitle = document.querySelector("#blogTitle");
        const blogBody = document.querySelector("#blogBody");
        const currentDate = new Date();
        const blogDate = currentDate.toLocaleDateString();

        if (blogTitle.value && blogBody.value) {
            const newPost = {
                title: blogTitle.value,
                body: blogBody.value,
                date: blogDate
            };
            const updatedPosts = [...blogPosts, newPost];

            this.setState({
                posts: updatedPosts
            });

            blogTitle.value = "";
            blogBody.value = "";
        }
    }

    showInputHandler = () => {
        let showInputToggle = this.state.showInput;
        showInputToggle = !showInputToggle;
        this.setState({ showInput: showInputToggle });
    }

    render() {
        let input = null;
        let backdrop = null;
        if (this.state.showInput) {
            backdrop = <Backdrop />
            input = <Input />
        }

        return (
            <Aux>
                {backdrop}
                <NewPost showToggle={this.showInputHandler} />
                <AuthContext.Provider value={{ submit: this.submitBlogHandler }}>
                    {input}
                </AuthContext.Provider>
                <Display posts={this.state.posts} />
            </Aux>
        );
    }
}

export default Blog;