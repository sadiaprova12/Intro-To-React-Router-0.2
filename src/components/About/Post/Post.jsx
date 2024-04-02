// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';
// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
    // eslint-disable-next-line react/prop-types
    const {id, title} = post;
    const navigate = useNavigate();

    const handleNavigation = () =>{
       navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>{title} + </h5>
            {/* <p>{body}</p> */}
            <Link to={`/post/${id}`}>Show Details</Link>
           <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
           <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;