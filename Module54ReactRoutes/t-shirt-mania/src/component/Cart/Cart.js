import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jnno ekta naw</h3>
            <p>tomar nijer jnno ekta</p>
            <p><small>amar jnno r ekta</small></p>
        </div>
    }
    else {
        message = <p>Thanks for Buying</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order summary </h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>

                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p> 3 jn k gift diba? </p> : <p> kino kino</p>
            }
            <p>and operator</p>
            {
                cart.length === 2 && <h3>Double item</h3>
            }
            <p>or operator</p>
            {
                cart.length === 4 || <h3>4ta item na</h3>
            }
        </div>
    );
};

export default Cart;

/* 
conditional Rendering
1. use element in a variable  and then use  if else to set value
2. ternary operation condition ? true:false 
3. && operator
4. || operator

*/