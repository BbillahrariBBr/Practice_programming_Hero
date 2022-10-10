import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData()
    // console.log(details);
    const { id, title, body, userId } = details;
    const navigate = useNavigate()
    const handleNav = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details About post: {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleNav}>Get the Author</button>

        </div>
    );
};

export default PostDetails;