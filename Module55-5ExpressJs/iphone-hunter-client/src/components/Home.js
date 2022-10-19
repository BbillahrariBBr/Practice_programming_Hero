import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h3>Show me All the phones you have</h3>
            <h4>i got: {phones.length}</h4>
            {
                phones.map(phone => <li> <Link to={`/phones/${phone.id}`}> {phone.name}</Link></li>)
            }
        </div>
    );
};

export default Home;