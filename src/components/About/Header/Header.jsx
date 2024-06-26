// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to = "/friends">Friends</ActiveLink>
            <ActiveLink to = "/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;