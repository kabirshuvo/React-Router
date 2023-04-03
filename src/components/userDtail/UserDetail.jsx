import React from 'react';
import { useLoaderData } from 'react-router-dom';
const UserDetail = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h3>Every Info about A users</h3>
            <h1>{user.name}</h1>
            <p>user name : {user.username}</p>
            
        </div>
    );
};

export default UserDetail;