import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';
const User = ({user}) => {
    const {email, name, id, phone} = user;
    return (
        <div className='user'>
            <h3>{name}</h3>
            <p>Email Id: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/user/${id}`}>show me details</Link></p>
        </div>
    );
};

export default User;