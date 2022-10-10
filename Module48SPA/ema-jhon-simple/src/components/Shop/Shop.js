import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData()
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    // useEffect(() => {
    //     // console.log('products load before fetch');
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    // useEffect(() => {
    //     console.log('localstorage first line');
    //     const storedCart = getStoredCart();
    //     console.log(storedCart);
    //     const saveCart = []
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             saveCart.push(addedProduct);
    //         }

    //     }
    //     setCart(saveCart);
    // }, [products])

    const handleClick = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        //cart.push(product)

        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        handleClick={handleClick}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h3>order summary</h3>
                <p>Selected Items: {cart.length}</p> */}
            </div>
        </div>
    );
};

export default Shop;