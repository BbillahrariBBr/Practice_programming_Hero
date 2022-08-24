const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 23000 },
    { id: 4, name: 'tablet', price: 35000 },
];
const fives = numbers.find(n => n % 5 == 0);
console.log(fives);