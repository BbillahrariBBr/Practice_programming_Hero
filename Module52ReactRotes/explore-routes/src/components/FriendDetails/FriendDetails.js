import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            <h2>Everything You need to know about this person</h2>
            <h1>Name: {details.name}</h1>
        </div>
    );
};

export default FriendDetails;