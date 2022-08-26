const user = { id: 1, name: 'Gorib bhai', job: 'Actor' };
const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

const shop = {
    owner: 'Alia',
    address: {
        street: 'Narinda vuter goli',
        city: 'Ranbir',
        country: 'Bd'
    },
    products: ['laptop', 'mic', 'mobile', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
const shopJson = JSON.stringify(shop);
const shopObj = JSON.parse(shopJson);
console.log(shop);
console.log(shopJson);
console.log(shopObj);