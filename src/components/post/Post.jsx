import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css';
const Post = ({post}) => {
    const {id, title, body} = post;

const navigate = useNavigate();

const handleNavigate = () => {
        navigate(`/post/${id}`);
}


    return (
        <div className='post'>
            <p>{id}</p>
            <h2>{title}</h2>
            
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigate}>With Button Handler</button>
            
        </div>
    );
};

export default Post;