const getInputValueByID = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const name = getInputValueByID('prodcut-name-field');
    const quantity = getInputValueByID('product-quantity-field');
    console.log(name, quantity);
    addProductToDisplay(name, quantity);

    // set to local storage
    // simple way;
    // localStorage.setItem(name, quantity);
    saveItemToLocalStorage(name, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let cart = {};
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    //add product to the  object property;
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);

    //save to local storage
    localStorage.setItem('cart', cartStringify);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}
displayStoredProducts()