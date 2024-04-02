// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;