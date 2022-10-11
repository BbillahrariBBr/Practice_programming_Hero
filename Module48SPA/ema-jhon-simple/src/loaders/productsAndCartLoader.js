import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    //get cart
    const savedCart = getStoredCart();
    const initialCart = [];

    // console.log('savecart', savedCart);
    for (const id in savedCart) {
        // console.log(id);
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            // console.log(id, quantity);
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
        // console.log(addedProduct);
    }

    return { products: products, initialCart: initialCart };

}