import React, { Component } from 'react';

import Input from './components/Input/Input';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <div>Blog Posts</div>
      </div>
    );
  }
}

export default App;
