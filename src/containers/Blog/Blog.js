import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';

import AuthContext from '../../context/auth-context';
import Actions from '../../components/Actions/Actions';
import Input from '../../components/Input/Input';
import Display from '../../components/Display/Display';
import Post from '../../components/Post/Post';

class Blog extends Component {
    state = {
        inputType: null,
        inputWarnings: {
            title: false,
            author: false,
            text: false
        },
        posts: null,
        screen: 'home',
        singlePost: null,
        showDisplay: true,
        showInput: false,
        showPost: false
    }

    componentDidMount() {
        this.getData();
    }

    // Change state screen property to determine what icons/buttons are rendered in Actions component
    actionHandler = action => {
        this.setState({ screen: action });
    }

    clearWarnings = () => {
        this.setState({
            inputWarnings: {
                title: false,
                author: false,
                text: false
            }
        });
    }

    deletePost = () => {
        axios.delete('/posts/' + this.state.singlePost.id + '.json')
            .then((response) => {
                if (response) {
                    this.getData();
                }
            });
    }

    // Set state posts property which is passed as props to Display component
    getData = () => {
        axios.get('/posts.json')
            .then(response => {
                if (response.data) {
                    const newPosts = this.reversePosts(response.data);
                    this.setState({ posts: newPosts });
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
        }
        /* If any inputs are empty, update state inputWarnings property that will be passed to Input component 
        and change colour of related input element */
        else {
            if (!blogTitle.value) {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            title: true
                        }
                    };
                });
            } else {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            title: false
                        }
                    };
                });
            }
            if (!blogAuthor.value) {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            author: true
                        }
                    };
                });
            } else {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            author: false
                        }
                    };
                });
            }
            if (!blogBody.value) {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            text: true
                        }
                    };
                });
            } else {
                this.setState(prevState => {
                    return {
                        inputWarnings: {
                            ...prevState.inputWarnings,
                            text: false
                        }
                    };
                });
            }
        }

        return newPost;
    }

    /* Reverse order of blog posts in state posts property to render 
    posts to Display component newest first */
    reversePosts(posts) {
        const reverseEntries = [];

        for (let entry of Object.keys(posts)) {
            const post = {
                ...posts[entry],
                id: entry
            };

            reverseEntries.unshift(post);
        }

        return reverseEntries;
    }

    // Set state singlePost property to pass as props to Post component
    setPost = id => {
        const singlePost = this.state.posts.find(post => post.id === id);

        this.actionHandler("post");
        this.setState({ singlePost: singlePost });
    }

    /* Patch the property in the database "posts" node, but add an "edited"
    property to pass as props to the DateDisplay component, which will
    prefix some text to the author line */
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

        this.setState({ inputType: type });
        this.setState({ showInput: toggleInput });
    }

    togglePost = () => {
        let togglePost = this.state.showPost;
        togglePost = !togglePost;
        this.setState({ showPost: togglePost });
    }

    render() {
        // Map methods to new properties, then pass to Context
        const actions = {
            action: this.actionHandler,
            clear: this.clearWarnings,
            display: this.toggleDisplay,
            delete: this.deletePost,
            getInput: this.getInput,
            input: this.toggleInput,
            post: this.setPost,
            showPost: this.togglePost,
            submitEdit: this.submitEdit,
            submitNew: this.submitNew,
        };

        return (
            <React.Fragment>
                <AuthContext.Provider value={actions}>
                    <Input post={this.state.singlePost} show={this.state.showInput} type={this.state.inputType} warnings={this.state.inputWarnings} />
                    <Actions post={this.state.singlePost} screen={this.state.screen} />
                    <Display posts={this.state.posts} show={this.state.showDisplay} />
                    <Post post={this.state.singlePost} show={this.state.showPost} />
                </AuthContext.Provider>
            </React.Fragment>
        );
    }
}

export default Blog;