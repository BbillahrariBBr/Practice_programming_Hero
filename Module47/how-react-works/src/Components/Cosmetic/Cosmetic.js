import React from 'react';
import addToDb from '../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { name, price, _id } = props.cosmetic;
    const addToCart = (_id) => {
        // localStorage.setItem(_id, name)
        addToDb(_id)
    }
    const addToCartWithPara = () => addToCart(_id)
    return (
        <div className='product'>
            <h3>Name: {name}</h3>
            <h3>price: {price}</h3>
            <p>id:{_id}</p>
            <button onClick={addToCartWithPara}>Add to cart</button>
            <button onClick={() => { addToCart(_id) }}>Purchase</button>
        </div>
    );
};

export default Cosmetic;