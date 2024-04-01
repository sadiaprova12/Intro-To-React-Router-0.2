// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Friend.css';
// eslint-disable-next-line react/prop-types
const Friend = ({friend}) => {
    console.log(friend);
    // eslint-disable-next-line react/prop-types
    const {email, name, phone } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default Friend;