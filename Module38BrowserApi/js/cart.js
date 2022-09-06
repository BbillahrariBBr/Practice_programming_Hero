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
    displayProducts(name, quantity);

    // set to local storage
    // simple way;
    localStorage.setItem(name, quantity);
}

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}