/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frients = () => {
   
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h2>These are my friends: {data.length}</h2>
        </div>
    );
};

export default Frients;