import React, { Component } from 'react';

import axios from 'axios';
import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';

class Blog extends Component {
    state = {
        posts: [],
        showInput: false
    }

    componentDidMount() {
        axios.get('/posts.json')
            .then(response => {
                if (response.data) {
                    this.setState({ posts: response.data });
                }
            });
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

            axios.post('/posts.json', updatedPosts);

            blogTitle.value = "";
            blogBody.value = "";
        }
    }

    toggleInputHandler = () => {
        let inputToggle = this.state.showInput;
        inputToggle = !inputToggle;
        this.setState({ showInput: inputToggle });
    }

    render() {
        let input = null;
        let backdrop = null;
        let newBlogStyle = {
            marginTop: '25px'
        };

        if (this.state.showInput) {
            backdrop = <Backdrop clicked={this.toggleInputHandler} />
            input = <Input />
        }

        return (
            <Aux>
                {backdrop}
                <Button clicked={this.toggleInputHandler} buttonStyles={newBlogStyle} buttonText="New Blog Post" />
                <AuthContext.Provider value={{ submit: this.submitBlogHandler, cancel: this.toggleInputHandler }}>
                    {input}
                </AuthContext.Provider>
                <Display posts={this.state.posts} />
            </Aux>
        );
    }
}

export default Blog;