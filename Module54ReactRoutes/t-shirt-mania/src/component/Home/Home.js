import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddtoCart = tshirt => {
        // console.log(tshirt);
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            alert('T-shirt already Added')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
            // alert('successfully Added')
        }

    }
    const handleRemoveItem = tshirt => {
        // console.log(tshirt);
        const remaing = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaing)

    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveItem={handleRemoveItem}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;