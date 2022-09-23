import React from 'react';
import Shoes from '../../Shoes/Shoes';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second)
    return (
        <div>
            <h1>Welcome to my Cosmetics store</h1>
            <p>total: {total}</p>
            <Shoes></Shoes>
        </div>
    );
};

export default Cosmetics;