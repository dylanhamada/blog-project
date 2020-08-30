import React, { Component } from 'react';

import axios from 'axios';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Actions from '../../components/Actions/Actions';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Blog extends Component {
    state = {
        screen: 'home',
        posts: null,
        showInput: false,
        showDisplay: true
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
        const blogTitle = document.querySelector("#blogTitle");
        const blogBody = document.querySelector("#blogBody");
        const blogDate = new Date();

        if (blogTitle.value && blogBody.value) {
            const newPost = {
                title: blogTitle.value,
                body: blogBody.value,
                date: blogDate
            };

            axios.post('/posts.json', newPost)
                .then(resp => {
                    if (resp) {
                        axios.get('/posts.json')
                            .then(response => {
                                if (response.data) {
                                    this.setState({ posts: response.data });
                                }
                            });
                    }
                    this.setState({ showInput: false, showDisplay: true, screen: 'home' });
                });

            blogTitle.value = "";
            blogBody.value = "";
        }
    }

    toggleActionHandler = action => {
        this.setState({ screen: action });
    }

    toggleDisplayHandler = () => {
        let displayToggle = this.state.showDisplay;
        displayToggle = !displayToggle;
        this.setState({ showDisplay: displayToggle });
    }

    toggleInputHandler = () => {
        let inputToggle = this.state.showInput;
        inputToggle = !inputToggle;
        this.setState({ showInput: inputToggle });
    }

    render() {
        return (
            <Aux>
                <AuthContext.Provider value={{ action: this.toggleActionHandler, submit: this.submitBlogHandler, cancel: this.toggleInputHandler, display: this.toggleDisplayHandler }}>
                    <Input show={this.state.showInput} />
                    <Actions screen={this.state.screen} />
                </AuthContext.Provider>
                <Display posts={this.state.posts} show={this.state.showDisplay} />
            </Aux>
        );
    }
}

export default Blog;