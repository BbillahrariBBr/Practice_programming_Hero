const numbers = [12, 56, 87, 44];
const rem = numbers.map(x => x % 2);
// console.log(rem);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Shukhon'];

const firstLetter = friends.map(x => x[4]);
// console.log(firstLetter);
const nameLength = friends.map(x => x.length);
// console.log(nameLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 23000 },
    { id: 4, name: 'tablet', price: 35000 },
];
const items = products.map(x => x.name);
console.log(items);