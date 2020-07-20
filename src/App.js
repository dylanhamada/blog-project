import React, { Component } from 'react';

import classes from './App.module.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        return (
            <div>
                <Blog />
                <div>Blog Posts</div>
            </div>
        );
    }
}

export default App;
