import React, { Component } from 'react';

import axios from 'axios';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Blog extends Component {
    state = {
        posts: null,
        showInput: false,
        error: false
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
        const currentDate = new Date();
        const blogDate = currentDate.toLocaleDateString();

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
        let newBlogStyle = {
            marginTop: '25px'
        };

        return (
            <Aux>
                <Button clicked={this.toggleInputHandler} buttonStyles={newBlogStyle} buttonText="New Blog Post" />
                <AuthContext.Provider value={{ submit: this.submitBlogHandler, cancel: this.toggleInputHandler }}>
                    <Modal show={this.state.showInput} closeModal={this.toggleInputHandler}>
                        <Input />
                    </Modal>
                </AuthContext.Provider>
                <Display posts={this.state.posts} />
            </Aux>
        );
    }
}

export default withErrorHandler(Blog, axios);