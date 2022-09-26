import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total += (product.price * product.quantity);
        totalShipping += (product.shipping * product.quantity);
    }
    const tax = total * 0.1;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart' >
            <h3>order summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total} </p>
            <p>Total Shipping:${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total:${grandTotal.toFixed(2)} </h5>

        </div>
    );
};

export default Cart;