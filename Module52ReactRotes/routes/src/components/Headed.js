import React from 'react';
import { Link } from 'react-router-dom';

const Headed = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>products</Link>
            <Link to={'/about'}>about</Link>
        </div>
    );
};

export default Headed;