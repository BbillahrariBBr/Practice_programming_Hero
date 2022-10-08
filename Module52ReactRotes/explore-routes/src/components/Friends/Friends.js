import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const frineds = useLoaderData()
    return (
        <div>
            <h3>This is Friend  Page {frineds.length}</h3>
            {
                frineds.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;