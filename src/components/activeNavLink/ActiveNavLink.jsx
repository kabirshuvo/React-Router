import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveNavLink.css';

const ActiveNavLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
                className={({isActive})=> isActive ? "active" : ""}
       >
        {children}
        </NavLink>
    );
};

export default ActiveNavLink;