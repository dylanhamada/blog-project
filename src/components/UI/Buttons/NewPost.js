import React from 'react';

const NewPost = props => {
    return (
        <button type="button" onClick={props.showToggle}>New Blog Post</button>
    );
}

export default NewPost;