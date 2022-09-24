// use local storage to manage cart data
const addToDb = (id) => {
    let shoppingCart;

    //get the shopping cart
    const storedCard = localStorage.getItem('shopping-cart');
    if (storedCard) {
        shoppingCart = JSON.parse(storedCard);
        console.log(storedCard);
    }
    else {
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    console.log(quantity);
    if (quantity) {
        //add quantity
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // const newQuantity = +quantity + 1;
        // parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



}

const removeFromDb = (id) => {
    // console.log(id);
    const storedCard = localStorage.getItem('shopping-cart');
    if (storedCard) {
        const shoppingCart = JSON.parse(storedCard);
        if (id in shoppingCart) {
            console.log('exist ', id);
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }

    }

}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');

}
export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
};
