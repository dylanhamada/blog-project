import React, { Component } from 'react';

import axios from 'axios';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Actions from '../../components/Actions/Actions';
import Modal from '../../components/Layout/Modal/Modal';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Blog extends Component {
    state = {
        screen: 'home',
        posts: null,
        showInput: false,
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
        // const blogDate = currentDate.toLocaleDateString();

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
                    this.setState({ showInput: false });
                });

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
        return (
            <Aux>
                <AuthContext.Provider value={{ submit: this.submitBlogHandler, cancel: this.toggleInputHandler }}>
                    <Modal show={this.state.showInput} closeModal={this.toggleInputHandler}>
                        <Input />
                    </Modal>
                </AuthContext.Provider>
                <Display posts={this.state.posts} />
                <Actions screen={this.state.screen} />
            </Aux>
        );
    }
}

export default withErrorHandler(Blog, axios);