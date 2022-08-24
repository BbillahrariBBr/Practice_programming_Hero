const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(x => x > 20);
// console.log(bigNums);
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Shukhon'];
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 23000 },
    { id: 4, name: 'tablet', price: 35000 },
];
const expe = products.filter(p => p.price > 30000)
console.log(expe);