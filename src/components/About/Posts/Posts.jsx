// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h2>All Posts are here: {posts.length}</h2>
        </div>
    );
};

export default Posts;