import React from 'react';

import ActiveNavLink from '../components/activeNavLink/ActiveNavLink';
import './Header.css';
const Header = () => {
    return (
        <nav>
            <ActiveNavLink to="/">Home</ActiveNavLink>
            <ActiveNavLink to="/about">About</ActiveNavLink>
            <ActiveNavLink to="posts">Posts</ActiveNavLink>
            <ActiveNavLink to="/users">Users</ActiveNavLink>
            <ActiveNavLink to="/contact">Contact</ActiveNavLink>
        </nav>
    );
};

export default Header;