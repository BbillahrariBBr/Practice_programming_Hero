import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>Post page {posts.length}</h3>
            {
                posts.map()
            }
        </div>
    );
};

export default Posts;