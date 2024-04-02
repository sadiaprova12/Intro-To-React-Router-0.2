// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything about this person is here!</h3>
            
        </div>
    );
};

export default FriendDetail;