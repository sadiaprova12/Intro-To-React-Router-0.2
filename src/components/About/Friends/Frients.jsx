/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Frients = () => {
   
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h2>These are my friends: {data.length}</h2>
            <div>
                {
                    data.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Frients;