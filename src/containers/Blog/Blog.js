import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';

import AuthContext from '../../context/auth-context';
import Aux from '../../hoc/_Aux/_Aux';
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

    displayPost = id => {
        this.setState({ screen: 'post' });
        this.setState({ singlePost: this.state.posts[id] });
    }

    submitNewBlog = () => {
        const blogTitle = document.querySelector("#blogTitle");
        const blogBody = document.querySelector("#blogBody");
        const blogAuthor = document.querySelector("#blogAuthor");
        const blogDate = moment().local().format("dddd, MMMM D [at] h[:]mm a");

        if (blogTitle.value && blogAuthor.value && blogBody.value) {
            const newPost = {
                title: blogTitle.value,
                author: blogAuthor.value,
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

    togglePostHandler = () => {
        let postToggle = this.state.showPost;
        postToggle = !postToggle;
        this.setState({ showPost: postToggle });
    }

    render() {
        const actions = {
            action: this.toggleActionHandler,
            cancel: this.toggleInputHandler,
            display: this.toggleDisplayHandler,
            post: this.displayPost,
            showPost: this.togglePostHandler,
            submit: this.submitNewBlog
        };

        return (
            <Aux>
                <AuthContext.Provider value={actions}>
                    <Input show={this.state.showInput} />
                    <Actions screen={this.state.screen} />
                    <Display posts={this.state.posts} show={this.state.showDisplay} />
                    <Post post={this.state.singlePost} show={this.state.showPost} />
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default Blog;