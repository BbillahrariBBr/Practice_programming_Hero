import React from 'react';

const Cosmetic = (props) => {
    const { name, price } = props.cosmetic
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>price: {price}</h3>
        </div>
    );
};

export default Cosmetic;