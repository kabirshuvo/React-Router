import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    

    const post = useLoaderData();
    const {title, body} = post;
    return (
        <div>
            <h1>{title}</h1>
            <h3>{body}</h3>

            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;