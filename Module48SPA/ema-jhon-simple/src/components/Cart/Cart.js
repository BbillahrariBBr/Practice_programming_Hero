import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total += product.price;
        totalShipping += product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart' >
            <h3>order summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping:${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)} </h5>

        </div>
    );
};

export default Cart;