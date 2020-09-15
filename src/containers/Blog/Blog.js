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
        inputType: null,
        screen: 'home',
        posts: null,
        singlePost: null,
        showDisplay: true,
        showInput: false,
        showPost: false
    }

    componentDidMount() {
        this.getData();
    }

    actionHandler = action => {
        this.setState({ screen: action });
    }

    deletePost = () => {
        axios.delete('/posts/' + this.state.singlePost.id + '.json')
            .then((response) => {
                if (response) {
                    this.getData();
                }
            });
    }

    getData = () => {
        axios.get('/posts.json')
            .then(response => {
                if (response.data) {
                    this.setState({ posts: response.data });
                } else {
                    this.setState({ posts: null });
                }
            });
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
        const singlePost = { ...this.state.posts[id], id: id };

        this.setState({ screen: 'post' });
        this.setState({ singlePost: singlePost });
    }

    submitEdit = () => {
        const postId = this.state.singlePost.id;
        let newEdit = this.getInput();

        if (newEdit) {
            axios.patch(
                '/posts/' + postId + '.json',
                {
                    title: newEdit.title,
                    author: newEdit.author,
                    body: newEdit.body,
                    date: newEdit.date,
                    edited: true
                }
            )
                .then((resp) => {
                    if (resp) {
                        this.getData();
                    }
                    this.setState({ showInput: false, showDisplay: true, screen: 'home' });
                });
        }
    }

    submitNew = () => {
        let newPost = this.getInput();

        if (newPost) {
            axios.post('/posts.json', newPost)
                .then(response => {
                    if (response) {
                        this.getData();
                    }
                });
        }
    }

    toggleDisplay = () => {
        let toggleDisplay = this.state.showDisplay;
        toggleDisplay = !toggleDisplay;
        this.setState({ showDisplay: toggleDisplay });
    }

    toggleInput = type => {
        let toggleInput = this.state.showInput;
        toggleInput = !toggleInput;
        this.setState({ showInput: toggleInput });

        this.setState({ inputType: type });
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
            delete: this.deletePost,
            input: this.toggleInput,
            post: this.setPost,
            showPost: this.togglePost,
            submitEdit: this.submitEdit,
            submitNew: this.submitNew,
        };

        return (
            <React.Fragment>
                <AuthContext.Provider value={actions}>
                    <Input show={this.state.showInput} type={this.state.inputType} post={this.state.singlePost} />
                    <Actions screen={this.state.screen} />
                    <Display posts={this.state.posts} show={this.state.showDisplay} />
                    <Post post={this.state.singlePost} show={this.state.showPost} />
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default Blog;