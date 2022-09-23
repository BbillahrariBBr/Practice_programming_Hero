import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const total = multiply(first, second)
    const sum = add(first, second);
    return (
        <div>
            <h3>This is Shoes compo</h3>
            <p>total: {total}</p>
            <p>sum: {sum}</p>
        </div>
    );
};

export default Shoes;