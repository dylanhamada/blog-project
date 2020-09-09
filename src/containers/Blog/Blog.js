import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';

import AuthContext from '../../context/auth-context';
import Actions from '../../components/Actions/Actions';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';
import Post from '../../components/Post/Post';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Blog extends Component {
    state = {
        screen: 'home',
        posts: null,
        singlePost: null,
        showDisplay: true,
        showInput: false,
        showPost: false
    }

    componentDidMount() {
        axios.get('/posts.json')
            .then(response => {
                if (response.data) {
                    this.setState({ posts: response.data });
                }
            });
    }

    actionHandler = action => {
        this.setState({ screen: action });
    }

    getInput = () => {
        const blogTitle = document.querySelector("#blogTitle");
        const blogBody = document.querySelector("#blogBody");
        const blogAuthor = document.querySelector("#blogAuthor");
        const blogDate = moment().local().format("dddd, MMMM D [at] h[:]mm a");
        let newPost = null;

        if (blogTitle.value && blogAuthor.value && blogBody.value) {
            newPost = {
                title: blogTitle.value,
                author: blogAuthor.value,
                body: blogBody.value,
                date: blogDate
            };

            blogTitle.value = "";
            blogAuthor.value = "";
            blogBody.value = "";
        }

        return newPost;
    }

    setPost = id => {
        this.setState({ screen: 'post' });
        this.setState({ singlePost: this.state.posts[id] });
    }

    submitEdit = () => {

    }

    submitNew = () => {
        let newPost = this.getInput();
        console.log(newPost);

        if (newPost) {
            axios.post('/posts.json', newPost)
                .then(resp => {
                    if (resp) {
                        axios.get('/posts.json')
                            .then(resp => {
                                if (resp.data) {
                                    this.setState({ posts: resp.data });
                                }
                            });
                    }
                    this.setState({ showInput: false, showDisplay: true, screen: 'home' });
                });
        }
    }

    toggleDisplay = () => {
        let toggleDisplay = this.state.showDisplay;
        toggleDisplay = !toggleDisplay;
        this.setState({ showDisplay: toggleDisplay });
    }

    toggleInput = () => {
        let toggleInput = this.state.showInput;
        toggleInput = !toggleInput;
        this.setState({ showInput: toggleInput });
    }

    togglePost = () => {
        let togglePost = this.state.showPost;
        togglePost = !togglePost;
        this.setState({ showPost: togglePost });
    }

    render() {
        const actions = {
            action: this.actionHandler,
            display: this.toggleDisplay,
            input: this.toggleInput,
            post: this.setPost,
            showPost: this.togglePost,
            submit: this.submitNew
        };

        return (
            <React.Fragment>
                <AuthContext.Provider value={actions}>
                    <Input show={this.state.showInput} />
                    <Actions screen={this.state.screen} />
                    <Display posts={this.state.posts} show={this.state.showDisplay} />
                    <Post post={this.state.singlePost} show={this.state.showPost} />
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default Blog;