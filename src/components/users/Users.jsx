import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1>My Subscribers {users.length}</h1>
            <div>
            {
              users.map((user) => <User key={user.id} user={user} ></User>)  
            }
            </div>
        </div>
    );
};

export default Users;