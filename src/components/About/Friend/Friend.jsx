// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Friend = ({friend}) => {
    console.log(friend);
    // eslint-disable-next-line react/prop-types
    const {email, name, id, phone } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
        </div>
    );
};

export default Friend;