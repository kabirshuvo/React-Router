import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;