// use local storage to manage cart data
const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('Already exist');
        const newQuantity = +quantity + 1;
        // parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('New Added');
        localStorage.setItem(id, 1);
    }



}
export default addToDb;
