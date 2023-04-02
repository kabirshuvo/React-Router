import React from 'react';
import './user.css';
const User = ({user}) => {
    const {email, name, id, phone} = user;
    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>Email Id: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;